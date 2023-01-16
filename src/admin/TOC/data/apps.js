import ExpandingCards from '../../../components/01__expanding-cards/index.jsx'
import ProgressSteps from '../../../components/02__progress-steps/index.jsx'
import RotatingNavigationAnimation from '../../../components/03__rotating-navigation-animation/index.jsx'
import HiddenSearchWidget from '../../../components/04__hidden-search-widget/index.jsx'
import BlurryLoading from '../../../components/05__blurry-loading/index.jsx'
import ScrollAnimation from '../../../components/06__scroll-animation/index.jsx'
import SplitLandingPage from '../../../components/07__split-landing-page/index.jsx'
import FormWave from '../../../components/08__form-wave/index.jsx'
import SoundBoard from '../../../components/09__sound-board/index.jsx'
import DadJokes from '../../../components/10__dad-jokes/index.jsx'
import EventKeyCodes from '../../../components/11__event-key-codes/index.jsx'
import FAQCollapse from '../../../components/12__faq-collapse/index.jsx'
import RandomChoicePicker from '../../../components/13__random-choice-picker/index.jsx'
import AnimatedNavigation from '../../../components/14__animated-navigation/index.jsx'
import IncrementingCounter from '../../../components/15__incrementing-counter/index.jsx'
import DrinkWater from '../../../components/16__drink-water/index.jsx'
import MovieApp from '../../../components/17__movie-app/index.jsx'
import BackgroundSlider from '../../../components/18__background-slider/index.jsx'
import ThemeClock from '../../../components/19__theme-clock/index.jsx'
import ButtonRippleEffect from '../../../components/20__button-ripple-effect/index.jsx'
import DragNDrop from '../../../components/21__drag-n-drop/index.jsx'
import DrawingApp from '../../../components/22__drawing-app/index.jsx'
import KineticLoader from '../../../components/23__kinetic-loader/index.jsx'
import ContentPlaceholder from '../../../components/24__content-placeholder/index.jsx'
import StickyNavbar from '../../../components/25__sticky-navbar/index.jsx'
import DoubleVerticalSlider from '../../../components/26__double-vertical-slider/index.jsx'
import ToastNotification from '../../../components/27__toast-notification/index.jsx'
import GithubProfiles from '../../../components/28__github-profiles'
import DoubleClickHeart from '../../../components/29__double-click-heart/index.jsx'
import AutoTextEffect from '../../../components/30__auto-text-effect/index.jsx'
import PasswordGenerator from '../../../components/31__password-generator/index.jsx'
import GoodCheapFast from '../../../components/32__good-cheap-fast/index.jsx'
import NotesApp from '../../../components/33__notes-app/index.jsx'
import AnimatedCountdown from '../../../components/34__animated-countdown'
import ImageCarousel from '../../../components/35__image-carousel/index.jsx'
import Hoverboard from '../../../components/36__hoverboard/index.jsx'
import Pokedex from '../../../components/37__pokedex/index.jsx'
import MobileTabNavigation from '../../../components/38__mobile-tab-navigation/index.jsx'
import PasswordStrengthBackground from '../../../components/39__password-strength-background/index.jsx'
import _3DBackgroundBoxes from '../../../components/40__3d-background-boxes/index.jsx'
import VerifyAccountUI from '../../../components/41__verify-account-ui/index.jsx'
import LiveUserFilter from '../../../components/42__live-user-filter/index.jsx'
import FeedbackUIDesign from '../../../components/43__feedback-ui-design/index.jsx'
import CustomRangeSlider from '../../../components/44__custom-range-slider/index.jsx'
import NetflixMobileNavigation from '../../../components/45__netflix-mobile-navigation/index.jsx'
import QuizApp from '../../../components/46__quiz-app/index.jsx'
import TestimonialBoxSwitcher from '../../../components/47__testimonial-box-switcher/index.jsx'
import RandomImageFeed from '../../../components/48__random-image-feed/index.jsx'
import TodoList from '../../../components/49__todo-list/index.jsx'
import InsectCatchGame from '../../../components/50__insect-catch-game/index.jsx'

const apps = [
  { name: 'Expanding Cards', link: '01-expanding-cards', element: <ExpandingCards /> },
  { name: 'Progress Steps', link: '02-progress-steps', element: <ProgressSteps /> },
  { name: 'Rotating Navigation Animation', link: '03-rotating-navigation-animation', element: <RotatingNavigationAnimation /> },
  { name: 'Hidden Search Widget', link: '04-hidden-search-widget', element: <HiddenSearchWidget /> },
  { name: 'Blurry Loading', link: '05-blurry-loading', element: <BlurryLoading /> },
  { name: 'Scroll Animation', link: '06-scroll-animation', element: <ScrollAnimation /> },
  { name: 'Split Landing Page', link: '07-split-landing-page', element: <SplitLandingPage /> },
  { name: 'Form Wave', link: '08-form-wave', element: <FormWave /> },
  { name: 'Sound Board', link: '09-sound-board', element: <SoundBoard /> },
  { name: 'Dad Jokes', link: '10-dad-jokes', element: <DadJokes /> },
  { name: 'Event Keycodes', link: '11-event-keycodes', element: <EventKeyCodes /> },
  { name: 'FAQ Collapse', link: '12-FAQ-collapse', element: <FAQCollapse /> },
  { name: 'Random Choice Picker', link: '13-random-choice-picker', element: <RandomChoicePicker /> },
  { name: 'Animated Navigation', link: '14-animated-navigation', element: <AnimatedNavigation /> },
  { name: 'Incrementing Counter', link: '15-incrementing-counter', element: <IncrementingCounter /> },
  { name: 'Drink Water', link: '16-drink-water', element: <DrinkWater /> },
  { name: 'Movie App', link: '17-movie-app', element: <MovieApp /> },
  { name: 'Background Slider', link: '18-background-slider', element: <BackgroundSlider /> },
  { name: 'Theme Clock', link: '19-theme-clock', element: <ThemeClock /> },
  { name: 'Button Ripple Effect', link: '20-button-ripple-effect', element: <ButtonRippleEffect /> },
  { name: 'Drag N Drop', link: '21-drag-n-drop', element: <DragNDrop /> },
  { name: 'Drawing App', link: '22-drawing-app', element: <DrawingApp /> },
  { name: 'Kinetic Loader', link: '23-kinetic-loader', element: <KineticLoader /> },
  { name: 'Content Placeholder', link: '24-content-placeholder', element: <ContentPlaceholder /> },
  { name: 'Sticky Navbar', link: '25-sticky-navbar', element: <StickyNavbar /> },
  { name: 'Double Vertical Slider', link: '26-double-vertical-slider', element: <DoubleVerticalSlider /> },
  { name: 'Toast Notification', link: '27-toast-notification', element: <ToastNotification /> },
  { name: 'Github Profiles', link: '28-github-profiles', element: <GithubProfiles /> },
  { name: 'Double Click Heart', link: '29-double-click-heart', element: <DoubleClickHeart /> },
  { name: 'Auto Text Effect', link: '30-auto-text-effect', element: <AutoTextEffect /> },
  { name: 'Password Generator', link: '31-password-generator', element: <PasswordGenerator /> },
  { name: 'Good Cheap Fast', link: '32-good-cheap-fast', element: <GoodCheapFast /> },
  { name: 'Notes App', link: '33-notes-app', element: <NotesApp /> },
  { name: 'Animated Countdown', link: '34-animated-countdown', element: <AnimatedCountdown /> },
  { name: 'Image Carousel', link: '35-image-carousel', element: <ImageCarousel /> },
  { name: 'Hoverboard', link: '36-hoverboard', element: <Hoverboard /> },
  { name: 'Pokedex', link: '37-pokedex', element: <Pokedex /> },
  { name: 'Mobile Tab Navigation', link: '38-mobile-tab-navigation', element: <MobileTabNavigation /> },
  { name: 'Password Strength Background', link: '39-password-strength-background', element: <PasswordStrengthBackground /> },
  { name: '3D Background Boxes', link: '40-3D-background-boxes', element: <_3DBackgroundBoxes /> },
  { name: 'Verify Account UI', link: '41-verify-account-ui', element: <VerifyAccountUI /> },
  { name: 'Live User Filter', link: '42-live-user-filter', element: <LiveUserFilter /> },
  { name: 'Feedback UI Design', link: '43-feedback-ui-design', element: <FeedbackUIDesign /> },
  { name: 'Custom Range Slider', link: '44-custom-range-slider', element: <CustomRangeSlider /> },
  { name: 'Netflix Mobile Navigation', link: '45-netflix-mobile-navigation', element: <NetflixMobileNavigation /> },
  { name: 'Quiz App', link: '46-quiz-app', element: <QuizApp /> },
  { name: 'Testimonial Box Switcher', link: '47-testimonial-box-switcher', element: <TestimonialBoxSwitcher /> },
  { name: 'Random Image Feed', link: '48-random-image-feed', element: <RandomImageFeed /> },
  { name: 'Todo List', link: '49-todo-list', element: <TodoList /> },
  { name: 'Insect Catch Game', link: '50-insect-catch-game', element: <InsectCatchGame /> }
]
export default apps
