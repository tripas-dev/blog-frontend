'use strict'

import React from 'react'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import SuccessButton from '../../atoms/success-buttom'

const MOCK_DATA = 'Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.'
export default function Editor () {
  const mdParser = new MarkdownIt()
  let postContentInHtml = ''

  const handleEditorChange = ({ html, text }) => {
    console.log('handleEditorChange', html)
    postContentInHtml = html;
  }

  const savePost = () => {
    console.log('postContent', postContentInHtml)
  }

  return (
    <div>
      <div style={{ height: '500px' }}>
        <MdEditor
          value={MOCK_DATA}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </div>
        <SuccessButton label={'Post it'} onClick={savePost} />
    </div>
  )
}
