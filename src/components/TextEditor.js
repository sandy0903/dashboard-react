import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { config } from './editorConfig'

const TextEditor = ({onSubmit}) => {
    const [body, setBody] = useState('')
    ClassicEditor.defaultConfig = config
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({body})
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setBody(data)
                }}
            />
            
        </form>
    )
}

export default TextEditor