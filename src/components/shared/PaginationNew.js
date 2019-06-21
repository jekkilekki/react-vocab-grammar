// with a little help from my friends
// https://scotch.io/tutorials/build-custom-pagination-with-react

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { numRange } from '../../utils/helpers'

const PREV_PAGE = 'PREV'
const NEXT_PAGE = 'NEXT'

class PaginationNew extends Component {
  constructor(props) {
    super(props)
    const { totalItems = null, pageLimit = 5, pageNeighbors = 0 } = props

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 5
    this.totalItems = typeof totalItems === 'number' ? totalItems : 0

    // pageNeighbors can be 0, 1, or 2
    this.pageNeighbors = typeof pageNeighbors === 'number'
      ? Math.max(0, Math.min(pageNeighbors, 2))
      : 0

    this.totalPages = Math.ceil(this.totalItems / this.pageLimit)

    this.state = { currentPage: 1 }
  }

  componentDidMount() {
    this.gotoPage(1)
  }

  gotoPage = (page) => {
    const { onPageChanged = f => f } = this.props
    const currentPage = Math.max(0, Math.min(page, this.totalPages))
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalItems: this.totalItems
    }

    this.setState({ currentPage }, () => onPageChanged( paginationData ))
  }

  handleClick = (page) => (e) => {
    e.preventDefault()
    this.gotoPage(page)
  }

  prevPage = (e) => {
    e.preventDefault()
    this.gotoPage( this.state.currentPage - (this.pageNeighbors * 2) - 1)
  }

  nextPage = (e) => {
    e.preventDefault()
    this.gotoPage( this.state.currentPage + (this.pageNeighbors * 2) + 1)
  }
  
  /**
   * If totalPages = 10, pageNeighbors = 2, currentPage = 6
   * (1) < {4 5} [6] {7 8} > (10)
   */
  fetchPageNums = () => {
    const totalPages = this.totalPages
    const currentPage = this.state.currentPage
    const pageNeighbors = this.pageNeighbors

    /**
     * totalNums: the total page numbers to display on the control
     * totalBlocks: totalNumbers + 2 to cover for left(<), right(>) controls
     */
    const totalNumbers = (this.pageNeighbors * 2) + 3
    const totalBlocks = totalNumbers + 2

    if ( totalPages > totalBlocks ) {
      const startPage = Math.max( 2, currentPage - pageNeighbors )
      const endPage = Math.min( totalPages - 1, currentPage + pageNeighbors )

      let pages = numRange( startPage, endPage )

      /**
       * hasLeftSpill: hidden left pages
       * hasRightSpill: hidden right pages
       * spillOffset: num of hidden pages either left or right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = (totalPages - endPage) > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case ( hasLeftSpill && !hasRightSpill ): {
          const extraPages = numRange( startPage - spillOffset, startPage - 1 )
          pages = [PREV_PAGE, ...extraPages, ...pages]
          break
        }
        // handle: (1) {2 3} [4] {5 6} > (10)
        case ( !hasLeftSpill && hasRightSpill ): {
          const extraPages = numRange( endPage + 1, endPage + spillOffset )
          pages = [...pages, ...extraPages, NEXT_PAGE]
          break
        }
        // handle: (1) < {4 5} [6] {7 8} > (10)
        case ( hasLeftSpill && hasRightSpill ): 
        default: {
          pages = [PREV_PAGE, ...pages, NEXT_PAGE]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return numRange(1, totalPages)
  }
  
  render() {
    if ( !this.totalItems || this.totalPages === 1 ) return null 

    const { currentPage } = this.state
    const pages = this.fetchPageNums()

    return (
      <Fragment>
        <nav aria-label='Flashcards Pagination' className='pagination-nav'>
          <ul className='page-numbers'>
            { pages.map((page, i) => {

              if ( page === PREV_PAGE ) return (
                <li key={i} className='page-item btn btn-small grey' aria-label='Previous' onClick={this.prevPage}>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </li>
              )

              if ( page === NEXT_PAGE ) return (
                <li key={i} className='page-item btn btn-small grey' aria-label='Next' onClick={this.nextPage}>
                  <span aria-hidden='true'>&raquo;</span>
                  <span className='sr-only'>Next</span>
                </li>
              )

              return (
                <li key={i} className={`page-item btn btn-small grey${ currentPage === page ? ' active' : ''}`} onClick={this.handleClick(page)}>
                  <span className='page-link'>{page}</span>
                </li>
              )
            })}
          </ul>
        </nav>
      </Fragment>
    )
  }
}

PaginationNew.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbors: PropTypes.number,
  onPageChanged: PropTypes.func
}

export default PaginationNew