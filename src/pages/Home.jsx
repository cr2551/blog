import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <Link to='/article' className='article-link'>
                <section>
                    <div className="image-container">
                        <img alt="screen full of code" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=889&q=80"></img>
                    </div>
                    <div className="article-info">
                        <h3>What I Learned In My First Two-Week Hackathon</h3>
                        <div className='description'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis perferendis unde iure praesentium tempore numquam molestiae, aperiam qui quas expedita dolores fugit fuga et quae provident maxime ipsam, adipisci similique.</p>
                        </div>
                    </div>
                </section>            
            </Link>  
        </div>
    )
}
