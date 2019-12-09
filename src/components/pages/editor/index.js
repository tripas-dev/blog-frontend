'use strict'

import React from 'react'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  saveButton: {
    color: 'white',
    backgroundColor: 'green',
    padding: '.5rem 1rem .5rem 1rem',
    margin: '1rem 0'
  }
}))

const MOCK_DATA = 'Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.'
export default function Editor () {
  const mdParser = new MarkdownIt()
  const classes = useStyles()
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
        <Button className={classes.saveButton} onClick={savePost}>
          Post it
        </Button>
    </div>
  )
}
