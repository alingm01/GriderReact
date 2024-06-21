import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import alexaImg from './images/alexa.png'
import cortanaImg from './images/cortana.png'
import siriImg from './images/siri.png'

export default function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'> 
          <p className='title'>Personal Digital Assitants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is 4'>
              <ProfileCard title="Asana" handle="@alexa99" image={alexaImg} description="Alexa was created by Amazon"/>  
            </div>
            <div className='column is 4'>
              <ProfileCard title="Cortana" handle="@cortana32" image={cortanaImg} description="Cortana was made by microsoft"/>
            </div>
            <div className='column is 4'>
              <ProfileCard title="Siri"  handle="@siri01" image={siriImg} description="Siri was made by Apple is being phased out"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}