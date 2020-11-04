// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import page from './modules/page.js';
import rules from './modules/rules.js';
import FullPageScroll from './modules/full-page-scroll';
import accentTypography from './modules/accent-typography';

page();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
rules();
accentTypography();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
