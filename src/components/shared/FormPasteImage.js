import React, { Component } from 'react'
import { Gluejar } from '@charliewilco/gluejar'
import { connect } from 'react-redux'
import { formError } from '../../stateManagement/actions'

class FormPasteImage extends Component {
  checkImage = (e) => {
    this.props.onChange(e)
  }

  render() {
    return (
      <Gluejar 
        onPaste={files => console.log(files)} 
        onError={err => console.error(err)}
        style={{
          height: '100',
          width: '300'
        }}
      >
        {({ images }) =>
          images.length > 0 &&
          images.map(image => <img src={image} key={image} alt={`Pasted: ${image}`} />)
        }
      </Gluejar>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { formError })(FormPasteImage)