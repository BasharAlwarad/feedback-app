import { useState, useEffect } from 'react'
import axios from 'axios'

const Main = ({ page }) => {
  const [arr, setArr] = useState()

  const createArr = num => {
    num = Math.floor(Math.sqrt(num)) * Math.floor(Math.sqrt(num))
    let [res, finalArr, widthArr, rowArr, sqrNum] = [
      [],
      [],
      [],
      [],
      Math.floor(Math.sqrt(num)),
    ]
    let vw = (window.innerWidth * 90) / 100 / Math.floor(Math.sqrt(num))
    let vh = (window.innerHeight * 65) / 100 / Math.floor(Math.sqrt(num))

    const width = () => {
      for (let i = 0; i < num; i++) {
        widthArr.push(`${vw}px`)
      }
      return widthArr.join(' ')
    }

    if (num && num > 0) {
      let arr1 = [...Array(num).keys()]
      res = arr1.reduce((a, c, i) => {
        return i % sqrNum === 0 ? a.concat([arr1.slice(i, i + sqrNum)]) : a
      }, [])
      res.map(e => {
        finalArr.push(e.map(x => (x = `g${x}`)).join(' '))
      })
      finalArr.map(e => rowArr.push(`[grass] ' ${e} ' ${vh}px [grass]`))

      rowArr.push(`/ ${width()}`)
    }

    return rowArr.join(' ')
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=25`
      )
      setArr(data.results)
    })()
  }, [page])

  return (
    <div
      className='x x3'
      style={{ grid: `${createArr(arr && arr.length, 'px')}` }}
    >
      {Array.from(Array(arr && arr.length).keys()).map(e => (
        <div
          key={e}
          className={`grass g${e}`}
          style={{
            gridArea: `g${e}`,
          }}
        >
          {arr && arr[e].name}{' '}
        </div>
      ))}
    </div>
  )
}

export default Main
