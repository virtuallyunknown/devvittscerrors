import { Devvit } from '@devvit/public-api';

Devvit.addTrigger({
    events: ['AppInstall', 'AppUpgrade'],
    onEvent: (event, context) => {
        console.log('AppInstall or AppUpgrade event received');

        /**
         * Just an example using ES5+ syntax that will trigger the TSC errors
         */
        ['foo'].includes('bar');
    }
})

export default Devvit;