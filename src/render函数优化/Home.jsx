import React, {memo} from 'react';

const Home = memo(function(prop) {
  console.log("Home rerender");
  return (
      <div>
        <h1>{ prop.msg }</h1>
      </div>
  );
})

export default Home;
