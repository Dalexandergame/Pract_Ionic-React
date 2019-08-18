import React , { useState } from 'react';
import { IonActionSheet, IonContent, IonButton } from '@ionic/react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

export const ActionSheet: React.FC = () => {

    const [showActionSheet, setShowActionSheet] = useState(false);

        return (
        <IonContent>
        <IonButton onClick={() => setShowActionSheet(true)} expand ="block">Show Action Sheet</IonButton>
        <IonActionSheet
          isOpen={showActionSheet}
          animated={true}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              console.log('Delete clicked');
            }
          }, {
            text: 'Share',
            icon: 'share',
            handler: () => {
              console.log('Share clicked');
            }
          }, {
            text: 'Play (open modal)',
            icon: 'arrow-dropright-circle',
            handler: () => {
              console.log('Play clicked');
            }
          }, {
            text: 'Favourite',
            icon: 'heart',
            handler: () => {
              console.log('Favourite clicked');
            }
          }, {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]}
          >
        </IonActionSheet>
      </IonContent>
        )

}

export default ActionSheet;