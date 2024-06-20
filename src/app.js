import ProfileCard from './ProfileCard';
import alexaImg from './images/alexa.png'
import cortanaImg from './images/cortana.png'
import siriImg from './images/siri.png'

export default function App() {
  return (
    <>
    <ProfileCard title="Asana" handle="@alexa99" image={alexaImg}/>
    <ProfileCard title="Cortana" handle="@cortana32" image={cortanaImg}/>
    <ProfileCard title="Siri"  handle="@siri01" image={siriImg}/>
    </>
  )
}