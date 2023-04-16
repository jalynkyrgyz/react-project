import React from 'react'
import styles from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        let curP = currentPage
        let curPF = ((curP - 5) ? 0 : curP - 5)
        let curPL = curP + 5
        let slicedPages = pages.slice(curPF, curPL)
        
  return (
    <div className={styles.pages}>  
        {slicedPages.map( page => {
            return <span className={currentPage === page ? styles.selectedPage : ""} 
             key={page} onClick={(e)=> {onPageChanged(page)}} >{page}</span>
        })}         
    </div>  
  )
}

export default Paginator