import { IonContent, IonPage, setupIonicReact, useIonViewDidLeave, useIonViewWillEnter } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/index.css';
import { useEffect, useRef } from 'react';
import { ConfigureGame } from './game/config/GameConfig';
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from "@mauricewegner/capacitor-navigation-bar";

setupIonicReact();

const PGame: React.FC = () => {

    const hideStatusBar = async () => {
        await StatusBar.hide();
    };
    hideStatusBar();

    const hideNavigationBar = async () => {
        NavigationBar.hide();
    };
    hideNavigationBar();

    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(()=>{
        let game = ConfigureGame(ref.current as any);
    },[]);

    return (
        <IonPage>
            <IonContent className="ion-no-padding" fullscreen={false} scrollY={false} scrollX={false}>
                <div className="gamediv" id="phaser-game" ref={ref}></div>
            </IonContent>
        </IonPage>
    );
};

export default PGame;
