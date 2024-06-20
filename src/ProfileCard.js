export default function ProfileCard({ title, handle, image}) {
  return (
    <div>
      <img src={image} alt="pda logo"/>
      <div>The title is {title}</div>
      <div>The handle is {handle}</div>
    </div>
  )
}