import { useState } from 'react';
import './EditableText.css';

function EditableText({initialText}) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(initialText)
  
    // TODO: Change logic to auto-focus the input field on double click. e.target defaults to the <p> field currently
    const handleDoubleClick = _ => {
        // e.target.children[0].focus()
        setIsEditing(true);
    };
  
    return (
        <div className="Text" onDoubleClick={handleDoubleClick}>
          { isEditing ? (
            <input type="text" value={text} onChange={e => setText(e.target.value)} onBlur={_ => setIsEditing(false)} />
          ) : (
            <p>{text}</p>
          )}
        </div>
    );
}

export default EditableText;