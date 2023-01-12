async function getName(){
  const res1 = await fetch("https://gist.githubusercontent.com/joshteng/d9110fa6b7b446549d8df265651c24d6/raw/name.json")
  const res = await res1.json()
  console.log(res)
}

// const res = fetch("https://gist.githubusercontent.com/joshteng/d9110fa6b7b446549d8df265651c24d6/raw/name.json")
// console.log(res)
getName()