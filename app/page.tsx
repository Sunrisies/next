// async function getData() {
//   const res = await fetch('http://chaoyang1024.top:3000/api/user/nav', {
//     headers: {Authorization:'	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjk5NTA0Mzk0LCJleHAiOjE3MDAxMDkxOTR9.joCPyWUZdEmi8SHxtzovrbiHnhhB8qkUzltXiKlvecI'}
//   })
//   const data = await res.json();
//   return data;
  
// }

const HomePage = async () => {
//   const {data :navList} = await getData()
// console.log(navList,'data')
  return (
    <>
          <h2>HomePage</h2>
          <ul>
      {/* {navList.map((item:any) => (
        <li key={item.key}>{item.label} -- { item.key}</li>
      ))} */}
    </ul>
</>
  
  )
}

export default HomePage
