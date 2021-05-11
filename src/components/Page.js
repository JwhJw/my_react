import React from 'react'
import './Page.css'
export default function Page(props) {
    const pageNum = getPageNum(props)
    const min = getMin(props, pageNum)
    const max = getMax(min, pageNum, props)
    const pageBtn = []
    for (let i = min; i < max + 1; i++) {
        pageBtn.push(<span key={i} className={i === props.currentPage ? "page-btn active" : "page-btn"} onClick={() => changePage(i, props)}>{i}</span>)
    }
    return (
        <div className="pageChange">
            <span className={props.currentPage === 1 ? 'item disable' : 'item'} onClick={() => changePage(1, props)}>首页</span>
            <span className={props.currentPage === 1 ? 'item disable' : 'item'} onClick={() => changePage(props.currentPage - 1 < 1 ? 1 : props.currentPage - 1, props)}>上一页</span>
            {pageBtn}
            <span className={props.currentPage === pageNum ? 'item disable' : 'item'} onClick={() => changePage(props.currentPage + 1 > pageNum ? pageNum : props.currentPage + 1, props)}>下一页</span>
            <span className={props.currentPage === pageNum ? 'item disable' : 'item'} onClick={() => changePage(pageNum, props)}>尾页</span>
            <span className="num">{props.currentPage}</span>
            /
            <span>{pageNum}</span>
        </div>
    )
}
function getMax(min, pageNum, props) {
    let max = min + props.pannelNumber - 1
    if (max > pageNum) {
        max = pageNum
    }
    return max;
}
function getMin(props, pageNum) {
    let min = props.currentPage - Math.floor(props.pannelNumber / 2)
    if (min < 1 || pageNum < props.pannelNumber) {
        min = 1;
    } else if (min > pageNum - props.pannelNumber + 1) {
        min = pageNum - props.pannelNumber + 1
    }
    return min
}
function changePage(target, props) {
    if (props.currentPage === target) {
        return;
    }
    props.handleChangePage && props.handleChangePage(target);
}
function getPageNum(props) {
    return Math.ceil(props.total / props.limit)
}
