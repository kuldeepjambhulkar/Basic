export default RestoMenuCardItem = ({data}) => {
    const imgId = data.card.info.imageId ? data.card.info.imageId : "y2gyqndu5xmzhnbzvaww";
    return(
        <div className="flex border-b-2 p-2 justify-between">
            <div className="m-2">
                <p>{data.card.info.name}</p>
                <p>₹ {data.card.info.price/100}</p>
                <p>{data.card.info.description}</p>
                <p>In Stock : {data.card.info.inStock ? "✅" : "❎"}</p>
            </div>
            <div className="flex flex-col">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + imgId} alt="" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </div>
        </div>
    )
}