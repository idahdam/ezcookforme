import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from './auth/protected-route';
import { Navbar, Footer } from './components';
// import AuthNav from './components/Auth0Testing/authnav';
import { 
  Home, About, NullPage, RecipesCatalogue, RecipesSingular, 
  Admin, AdminAddOrEdit, SearchResults, AppetizerTable, MainCourseTable, DessertTable
} from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/admin" component={Admin}/>
        <ProtectedRoute exact path="/admin/appetizer" component={AppetizerTable}/>
        <Route 
          exact
          path="/admin/appetizer/:id" 
          render={() => 
            <AdminAddOrEdit addOrEdit={false} typeOfDish={`appetizer`} />}
        />
        <ProtectedRoute exact path="/admin/maincourse" component={MainCourseTable}/>
        <Route 
          exact
          path="/admin/maincourse/:id" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={false} typeOfDish={`maincourse`} />}
        />
        <ProtectedRoute exact path="/admin/dessert" component={DessertTable}/>
        <Route 
          exact
          path="/admin/dessert/:id" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={false} typeOfDish={`dessert`} />}
        />
        <Route 
          exact path="/admin/add" 
          render={(props) => 
            <AdminAddOrEdit {...props} addOrEdit={true} />}
        />
        <Route exact path="/aboutus" component={About}/>
        <Route 
          exact path="/recipes" 
          render={(props) => 
            <RecipesCatalogue {...props} type={`All`} />}
        />
        <Route 
          exact path="/appetizer" 
          render={(props) => 
            <RecipesCatalogue {...props} type={`Appetizer`} />}
        />
        <Route 
          exact path="/appetizer/:id" 
          render={(props) => 
            <RecipesSingular {...props} type={`Appetizer`} />}
        />
        <Route 
          exact path="/maincourse" 
          render={(props) => 
            <RecipesCatalogue {...props} type={`Main Course`} />}
        />
        <Route 
          exact path="/maincourse/:id" 
          render={(props) => 
            <RecipesSingular {...props} type={`Main Course`} />}
        />
        <Route 
          exact path="/dessert" 
          render={(props) => 
            <RecipesCatalogue {...props} type={`Dessert`} />}
        />
        <Route 
          exact path="/dessert/:id" 
          render={(props) => 
            <RecipesSingular {...props} type={`Dessert`} />}
        />

        <Route 
          exact path="/search/:param" component={SearchResults}
        />  
        <Route 
          exact path="/search" component={SearchResults}
        />  
        <Route component ={NullPage} />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
