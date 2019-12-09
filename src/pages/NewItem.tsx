import {
    IonBackButton, IonPage, IonHeader, IonToolbar, IonButtons, IonContent,
} from '@ionic/react';
import React from 'react';

const NewItem: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            
            <IonContent></IonContent>
        </IonPage>
    )
};

export default NewItem;