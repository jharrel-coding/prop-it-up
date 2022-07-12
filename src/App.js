import Header from './components/Profile';
function App() {
  return (
    <div className="App">
      <Header 
        firstName={ "Jane" } 
        lastName={ "Doe" }
        age={ 45 }
        hairColor={"Black"}
        currentAge={45}
        />

      <Header 
          firstName={ "John" } 
          lastName={ "Smith" }
          age={ 88 }
          hairColor={"Brown"}
          currentAge={88}
      />

      <Header 
          firstName={ "Millard" } 
          lastName={ "Fillmore" }
          age={ 50 }
          hairColor={"Brown"}
          currentAge={50}
      />

      <Header 
          firstName={ "Maria" } 
          lastName={ "Smith" }
          age={ 62 }
          hairColor={"Brown"}
          currentAge={62}
      />
    </div>
  );
}

export default App;
