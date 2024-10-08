import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {DisplayhelloworldComponent} from './Components/displayhelloworld/displayhelloworld.component';
import { FormsModule } from "@angular/forms";
import {ShowhellobuttonComponent} from './Components/showhellobutton/showhellobutton.component';
import {DisplaynameComponent} from './Components/displayname/displayname.component';
import {CounterComponent} from './Components/counter/counter.component';
import {SimpleformComponent} from './Components/simpleform/simpleform.component';
import {UserageComponent} from './Components/userage/userage.component';
import {UsergreetingComponent} from './Components/usergreeting/usergreeting.component';
import {CalculatorComponent} from './Components/calculator/calculator.component';
import {TextlengthComponent} from './Components/textlength/textlength.component';
import {CurrencyconverterComponent} from './Components/currencyconverter/currencyconverter.component';
import {EvenoddcheckerComponent} from './Components/evenoddchecker/evenoddchecker.component';
import {WordreverserComponent} from './Components/wordreverser/wordreverser.component';
import {ShowdateComponent} from './Components/showdate/showdate.component';
import {ShowusernameComponent} from './Components/showusername/showusername.component';
import {MultiplicationtableComponent} from './Components/multiplicationtable/multiplicationtable.component';
import {SimpleloginComponent} from './Components/simplelogin/simplelogin.component';
import {FahrenheittocelsiusComponent} from './Components/fahrenheittocelsius/fahrenheittocelsius.component';
import {BookmarklistComponent} from './Components/bookmarklist/bookmarklist.component';
import {CharactercounterComponent} from './Components/charactercounter/charactercounter.component';
import {PalindromecheckerComponent} from './Components/palindromechecker/palindromechecker.component';
import {TemperatureconverterComponent} from './Components/temperatureconverter/temperatureconverter.component';
import {ShoppinglistComponent} from './Components/shoppinglist/shoppinglist.component';
import {FactorialcalculatorComponent} from './Components/factorialcalculator/factorialcalculator.component';
import {TodomanagerComponent} from './Components/todomanager/todomanager.component';
import {GuessnumbergameComponent} from './Components/guessnumbergame/guessnumbergame.component';
import {WordcounterComponent} from './Components/wordcounter/wordcounter.component';
import {RandomnumbergeneratorComponent} from './Components/randomnumbergenerator/randomnumbergenerator.component';
import {MultiplicationcheckerComponent} from './Components/multiplicationchecker/multiplicationchecker.component';
import {UppercaseconverterComponent} from './Components/uppercaseconverter/uppercaseconverter.component';
import {WordshufflerComponent} from './Components/wordshuffler/wordshuffler.component';
import {BmisolverComponent} from './Components/bmisolver/bmisolver.component';
import {UsernamevalidatorComponent} from './Components/usernamevalidator/usernamevalidator.component';
import {InterestcalculatorComponent} from './Components/interestcalculator/interestcalculator.component';
import {CompoundinterestcalculatorComponent} from './Components/compoundinterestcalculator/compoundinterestcalculator.component';
import {FibonaccigeneratorComponent} from './Components/fibonaccigenerator/fibonaccigenerator.component';
import {OddsumcalculatorComponent} from './Components/oddsumcalculator/oddsumcalculator.component';
import {CurrencyformatterComponent} from './Components/currencyformatter/currencyformatter.component';
import {RandomquotedisplayComponent} from './Components/randomquotedisplay/randomquotedisplay.component';
import {UppercasegreetingComponent} from './Components/uppercasegreeting/uppercasegreeting.component';
import {DivisiblecheckerComponent} from './Components/divisiblechecker/divisiblechecker.component';
import {GradecalculatorComponent} from './Components/gradecalculator/gradecalculator.component';
import {SpeedconverterComponent} from './Components/speedconverter/speedconverter.component';
import {ColorchangerComponent} from './Components/colorchanger/colorchanger.component';
import {LeapyearcheckerComponent} from './Components/leapyearchecker/leapyearchecker.component';
import {TemperaturealertComponent} from './Components/temperaturealert/temperaturealert.component';
import {DiscountcalculatorComponent} from './Components/discountcalculator/discountcalculator.component';
import {LetterreplacerComponent} from './Components/letterreplacer/letterreplacer.component';
import {SimplesliderComponent} from './Components/simpleslider/simpleslider.component';
import {PasswordstrengthcheckerComponent} from './Components/passwordstrengthchecker/passwordstrengthchecker.component';
import {MemorymatchgameComponent} from './Components/memorymatchgame/memorymatchgame.component';

const routes: Routes =[
  {path:'',component: DisplayhelloworldComponent},
  {path:'showbellbutton',component: ShowhellobuttonComponent},
  {path:'displayname',component: DisplaynameComponent},
  {path:'counter',component: CounterComponent},
  {path: 'simpleform', component: SimpleformComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'usergreeting',component: UsergreetingComponent},
  {path: 'calculator',component:CalculatorComponent},
  {path: 'textlength',component:TextlengthComponent},
  {path: 'currencyconverter',component:CurrencyconverterComponent},
  {path: 'evenoddchecker',component:EvenoddcheckerComponent},
  {path: 'wordreverser',component:WordreverserComponent},
  {path: 'showdate',component: ShowdateComponent},
  {path: 'showusername',component: ShowusernameComponent},
  {path: 'multiplicationtable',component: MultiplicationtableComponent},
  {path: 'simplelogin',component: SimpleloginComponent},
  {path: 'fahrenheittocelsius',component: FahrenheittocelsiusComponent},
  {path: 'bookmarklist',component: BookmarklistComponent},
  {path: 'charactercounter',component: CharactercounterComponent},
  {path: 'palindromechecker',component: PalindromecheckerComponent},
  {path: 'temperatureconverter',component: TemperatureconverterComponent},
  {path: 'shoppinglist',component: ShoppinglistComponent},
  {path: 'factorialcalculator',component: FactorialcalculatorComponent},
  {path: 'todomanager',component:TodomanagerComponent},
  {path: 'guessnumbergame',component:GuessnumbergameComponent},
  {path: 'wordcounter',component: WordcounterComponent},
  {path: 'randomnumbergenerator',component: RandomnumbergeneratorComponent},
  {path: 'multiplicationchecker',component: MultiplicationcheckerComponent},
  {path: 'uppercaseconverter',component:UppercaseconverterComponent},
  {path: 'wordshuffler',component:WordshufflerComponent},
  {path: 'bmisolver',component: BmisolverComponent},
  {path: 'usernamevalidator',component: UsernamevalidatorComponent},
  {path: 'interestcalculator',component: InterestcalculatorComponent},
  {path: 'compoundinterestcalculator',component: CompoundinterestcalculatorComponent},
  {path: 'fibonaccigenerator',component: FibonaccigeneratorComponent},
  {path: 'oddsumcalculator',component: OddsumcalculatorComponent},
  {path: 'currencyformatter',component: CurrencyformatterComponent},
  {path: 'randomquotedisplay',component: RandomquotedisplayComponent},
  {path: 'uppercasegreeting',component:UppercasegreetingComponent},
  {path: 'divisiblechecker',component: DivisiblecheckerComponent},
  {path: 'gradecalculator',component: GradecalculatorComponent},
  {path: 'speedconverter',component: SpeedconverterComponent},
  {path: 'colorchanger',component: ColorchangerComponent},
  {path: 'leapyearchecker',component:LeapyearcheckerComponent},
  {path: 'temperaturealert',component:TemperaturealertComponent},
  {path: 'discountcalculator',component: DiscountcalculatorComponent},
  {path: 'letterreplacer',component: LetterreplacerComponent},
  {path: 'simpleslider',component: SimplesliderComponent},
  {path: 'passwordstrengthchecker',component: PasswordstrengthcheckerComponent},
  {path: 'memorymatchgame',component: MemorymatchgameComponent},


]

@NgModule({
  imports: [

    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WordshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyformatterComponent,
    RandomquotedisplayComponent,
    UppercasegreetingComponent,
    DivisiblecheckerComponent,
    GradecalculatorComponent,
    SpeedconverterComponent,
    ColorchangerComponent,
    LeapyearcheckerComponent,
    TemperaturealertComponent,
    DiscountcalculatorComponent,
    LetterreplacerComponent,
    SimplesliderComponent,
    PasswordstrengthcheckerComponent,
    MemorymatchgameComponent,

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}
