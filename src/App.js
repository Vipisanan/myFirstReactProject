import React from 'react';
import './App.css';
import Hello from './hello/Hello';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>hi vipi</h1>
                <header className="App-header">
                    <div id="hello"></div>
                </header>

                <Hello></Hello>
            </div>
        );
    }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>hi vipi</h1>
//       <header className="App-header">
//           <div id="hello" ></div>
//       </header>
//
//         <Hello></Hello>
//     </div>
//   );
// }
//
// export default App;
