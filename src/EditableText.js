import { useState } from 'react';
import './EditableText.css';

function EditableText({initialText}) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(initialText)
  
    const handleDoubleClick = e => {
        setIsEditing(true);
    };
  
    return (
        <div className="Text" onDoubleClick={handleDoubleClick}>
          { isEditing ? (
            <input type="text" value={text} onChange={e => setText(e.target.value)} onBlur={() => setIsEditing(false)} />
          ) : (
            <p>{text}</p>
          )}
        </div>
    );
}

export default EditableText;