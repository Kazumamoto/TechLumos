import './contact.css'
import image from '../../../src/images/handshake.svg'
import ContactButton from './contactButton';

const Contact = () => {
    return (<div>
        <h1>Contact Us</h1>
        <div style={{display:'flex'}}>
            <ContactButton text='Send a Message'/>
            <ContactButton text='+92325722496'/>
            <ContactButton text='techlumos@gmail.com'/>
            <img  style={{flex:1,height:487,width:487}} src={image}/>
        </div>
        <div style={{display:'flex'}}>
            <div>
            <h2>Got a project in mind</h2>
        <p>Use the form to tell us about your project we will get back to you as soon as we can.</p>
        
            </div><form>
            <label style={{color:'white'}}>
                Your name
                <input type='text' placeholder='Name'/>
            </label>
            <label style={{color:'white'}}>
                Your Email
                <input type='text' placeholder='Email'/>
            </label>
            <br/>            
            <label style={{color:'white'}}>
                Your Project Details
                <input type='text' style={{height:300,width:400}} placeholder='Project details'/>
            </label>
            <br/>
            <label style={{color:'white'}}>
                Your timeline
                <input type='text' placeholder='Timeline'/>
            </label>
            <br/>
            <button>Send message</button>
        </form>
        </div>
    </div>);
}

export default Contact;