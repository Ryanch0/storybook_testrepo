import { Button } from "./stories/Button";
import { Page } from "./stories/Page";

function App() {
  
  return (
    <div>
      <Page />
      <div style={{paddingLeft : '100px'}}>
      <Button 
        label='stroybook'
        submit="submit"
        backgroundColor="black"
        primary={true}
        onClick={()=>alert('Clicked!')}
        size="large"
         />
      </div>
    </div>
  );
}

export default App;
