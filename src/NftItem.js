import "./nft-item.css";

export default function NftItem({ img, title, price }) {
  return (
    <div className="nft-item">
      <img src={img} alt={title}></img>
      <div className="content">
        <label>{title}</label>
        <label>{price}</label>
      </div>
    </div>
  );
}
