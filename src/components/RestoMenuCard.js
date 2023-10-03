import { useState } from "react"
import RestoMenuCardItem from "./RestoMenuCardItem"

export default RestoMenuCard = (props) => {
    return(
        <div>
            <div className="shadow-sm w-1/2 mx-auto p-3 m-3 cursor-pointer select-none border-b-2" onClick={() => {props.toggleShowCardBody()}}>
                {/* Head + Toggle Icon */}
                <div className="flex my-3 justify-between">
                    <div className="">
                        <span><b>{props.data.card.card.title}</b></span>
                        <span><b>({props.data.card.card.itemCards.length})</b></span>
                    </div>
                    <div>
                        <span>🔽</span>
                    </div>
                </div>
                {/* Body containing menu item */}
                <div>
                {props.showCardBody && props.data.card.card.itemCards.map(menuItem => {
                    return <RestoMenuCardItem data = {menuItem}/>
                })}
                </div>
            </div>
        </div>
    )
}