GitHub Settings ---------------------------------

cloning a repo --> git clone <url>  
add a file to git --> git add <fileName>  
status => git status  
commit => git commit  
push to server => git push  
pull from server(remote repo) => git pull  
take the latest version from remote to local => git fetch  
update the local repository with remote repository => git merge  

//Change globalyusername and email.if want to change only for current repository use without global  
config user => git config --global user.name <name>  
git config --global user.email <email>  
  

//GIT VERSION CONTROL  
git stash --> save uncommited changes locally  
git pull --> take remote changes to local repository  
git push --> push local changes to remote repository  
git stash apply --> get uncommited changes locally  


=================== Connect to database from Linux ============================================  









============================= JAVA BASIC =============================================================================================

JDK/SDK --> Java Development Kit -- Use by java developers as a development tool ,for development , debugging , compling all necessaery tools come up with JDK,for user this JDK does nt want.

JRE --> Java Runtime Environment -- Use by users of java code to run the java program, since developers of java need to run the code for testing they also need to download the JRE (When downloading JDK usually JRE download along with it),

Platform independent --> java considered as platform independent because with different computer , tabs, telephones they run the same java code on the same JRE(can be different versions) without worring about differences of different platforms.It runs on the Runtime Envionment.

file has only one public class, since public class name should be the same as public class name.
class , method, variables have access modifiers such as public, protected, default, private.

-----------ACCESS MODIFIERS------------------------
public --> anyone outside the packages can see it                                           (FROM ANYWHERE)
protected --> anyone inside the same package can see it also inherited classes can see it   [SUBCLASS AND SAME PACKAGE]
default -->  anyone inside same package can see it                                          [SAME PACKAGE ONLY]
private --> inside only the class , not outside world                                       {ONLY WITHIN THE SAME CLASS}

classes can be public and default , useless with private and protected.

classes can be static (inside of class,hierarchy of classes) but no many in use, incompatible with oop

---------------STATIC VARIABLES AND METHODS------------------
STATIC MEANS BELONGS TO CLASS
methods and variables can be static.
static methods can't output instance variables, only static variables
static data exist before even create any instance.since those belongs to class
MAIN METHOD SHOULD BE STATIC

------------sTRING BUILDERS AND MODIFIERS----------------
String are immutable(once you create a string you can never change it)

-------------------String and Object classes-----------------
all objects in java have the OBJECT class as their ultimate parent
child objects inherits parent Object class methods(String class also the same as Object class)
String is a class ,(non primitive data type)
but only for string we can create a String variable simply assigning some values , not needed to declare a String object.

----------------INTERFACE--------------------
interface only contain method name(header of methods) not method body not even curly brackets{}
method body you should write in implemented class and this is just like a contract.
class can have several interfaces
when class implement interfaces all the methods inside that interface should implement.
BUT CLASS CAN EXTEND ONLY ONE PARENT CLASS
interface cannot use new keyword, it means cannot create new object of interface. ex : tutorial24.Info info1 = new upcastingdowncasting.tutorial37.tutorial18.tutorial31.tutorial22.tutorial24.Machine();
but interface can refer existing objects to a new interface object. ex: tutorial24.Info info2 = person1;

--------------POLYMORPHISM------------------------
 which method can be called is decided by the type of variable
 which code runs is decided by the real object
 type of variable declares what methods you can call
 object declares which actual methods, implementations will actually be called when you call that method.

 ---------------ENCAPSULATION and API----------------
 You encapsulate the inner workings of that class within the classes.
 stop people outside the class getting at the guts of that class
 API can use for public usage of certain methods and variables(for encapsulated data, methods...etc)
 Hideaway implementation details within your class and just provide a public/API programming interface and  reduce two classes tightly coupled

-----------------UPCASTING AND DOWNCASTING-----------------
parent objects can't change to(cast) child objects.
but child objects can change to parent objects
//upcasting
//upcasting is safe and you don't need explicit cast inside brackets
//DOWNCASTING IS INHERENTLY UNSAFE THEREFORE THEY NEED CONFIRMATION FROM US, NOT AUTO CORRECTING , WE NEED TO PUT IT.UNLIKE NUMBER 1

--------------GENERICS AND WILDCARDS ----------------------------------------
generic class is a class that can work with other objects and specify what classes can work with
wild card comes with question mark <?> and read it like ArrayList of unknown type
wild cards means you can now pass an array list with any kind of parameter to this method.
upper bounded wildcards --> extends keyword
lower bounded wildcards --> super keyword

------------ANONYMOUS CLASSES--------------
anonymous classes are basically a way of either extending an existing class or implementing an interface in one time (one shot thing as always for interface)
//Color color1 = new Color();  ---> usual creating a new object.
//but here used the override methods with object declaration which is called anonymous class
//here the type of variable is Color but this thing is(this override method) actually a child class of Color
//Actually the type of this object is some child class of Color,that doesn't actually have a name
//that's why it's called anonymous class
//So for anonymous classes there is no way you can create a new object,but it's good a s a one shot thing


//reading a file in java can be done using Scanner, Buffered Reader or FileReader

-------------EXCEPTIONS------------------------------------------------------------------------------

-----------ABSTRACT CLASSES---------------------------------------------------------------
ABSTRACT CLASSES ARE SOMETHING THAT CAN USE WHEN YOU WANT TO START CREATING A CLASS HIERARCHY,BUT BASE CLASS IS NOT GONNA DO ANYTHING ONLY PROVIDING BASE FOR OTHER CLASSES
THERE SHOULD BE A REASON FOR EXISTANCE OF CLASSES AND OBJECTS
ABSTRACT CLASS is a base class that implements some common functionality that any child class has.
use ABSTRACT keyword with class names to prevent the user of this hierarchy from being initializing
ABSTRACT CLASSES CAN HAVE ABSTRACT METHODS SAME AS INTERFACES
ABSTRACT  method is exactly like method in interface(abstract method) but with KEYWORD ABSTRACT AND CHILD CLASS SHOULD INHERIT THIS METHOD AND IMPLEMENT THIS METHOD IN THEIR CLASSES
abstract class is more stronger than interfaces,class can implement many interfaces but iit can have only one parent class(abstract class)
INTERFACE YOU CAN'T PUT CODE, ABSTRACT CLASS CAN CLASS PUT CODE OR LEAVE IT AS ABSTRACT(WITHOUT METHOD BODY)

--------------------------------



