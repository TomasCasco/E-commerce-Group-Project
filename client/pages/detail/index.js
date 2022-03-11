import React from 'react'

export default function Index() {
  return (
    <div>Hola</div>
  )
}


Index.getInitialProps=({query})=>{
console.log(query)
return {}
}