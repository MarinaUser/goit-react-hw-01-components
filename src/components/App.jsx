import { Profile } from './Profile/Profile';
import user from './user.json'

// import recipes from './recipes.json';

export const  App = () => {
  return (
    <div>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      
    </div>
  );
}

