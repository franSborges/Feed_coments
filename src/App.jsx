import { Header } from './components/Header/Header';
import { Post } from './Post';

 export function App() {
  
  return (
    <div >
      <Header />
      <Post
        author="Fran S Borges"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse alias nihil rerum dolores quis dignissimos? Earum, soluta? Pariatur, a ipsum quam voluptas, ea hic quidem officia ab dicta veniam provident." />
      <Post />
      <Post />
    </div>
  )
}
