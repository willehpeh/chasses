# Services README


## AuthService

### Parameters
**currentUser** is updated every time Firebase's **onAuthStateChanged()** fires.  
**isAuthenticated** is a BehaviorSubject which mirrors the return value of **onAuthStateChanged()**.

### Methods
**signin()** triggers the Firebase sign in process and sets **currentUser** to the returned user on a successful sign in.  This method returns a promise which resolves *void* upon successful signin.  
**signup()** triggers the Firebase user creation process, sets **currentUser** to the returned user on a successful sign up, and triggers the **UserDataService** to add the user to the database.  Returns a promise which resolves *void* upon successful signup.  
**signout()** triggers the Firebase user sign out process.
