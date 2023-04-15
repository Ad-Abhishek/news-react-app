import React from 'react'

export default function NewsTable( {newz} ) {
  return (
    <>
    <div>
      {newz.map((a) => {
        return (
          <div key={a.id}>
            <img src={a.avatar} alt="yoyo" />
            <div>{a.first_name}</div>
          </div>
        );
      })}

    </div>
    </>
  )
}
