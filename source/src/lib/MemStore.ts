import { IObservableArray, observable, computed } from 'mobx';
import { Tab, Site } from '../background/ConnectionManager';
import { KeyPairWithAlias } from '../@types/models';
import { deployWithID, messageWithID } from '../background/SigningManager';

export class AppState {
  @observable isIntegratedSite: boolean = false;
  @observable isUnlocked: boolean = false;
  @observable isTimeToSecurityCheckup: boolean = false;
  @observable unlockAttempts: number = 5;
  @computed get lockedOut(): boolean {
    return this.unlockAttempts === 0;
  }
  @observable lockoutTimerStarted: boolean = false;
  timerDurationMins: number = 5;
  @observable remainingMins: number = this.timerDurationMins;
  @observable idleTimeoutMins: number = 2;
  @observable currentTab: Tab | null = null;
  @computed get connectionStatus(): boolean {
    const url = this.currentTab && this.currentTab.url;
    if (url) {
      return this.connectedSites.some(
        site => site.url === url && site.isConnected
      );
    }
    return false;
  }
  @observable connectionRequested: boolean = false;
  @observable connectedSites: IObservableArray<Site> = observable.array<Site>(
    [],
    { deep: true }
  );
  @observable hasCreatedVault: boolean = false;
  @observable activeUserAccount: KeyPairWithAlias | null = null;
  userAccounts: IObservableArray<KeyPairWithAlias> =
    observable.array<KeyPairWithAlias>([], { deep: true });
  @observable unsignedDeploys: IObservableArray<deployWithID> =
    observable.array<deployWithID>([], { deep: true });
  @observable unsignedMessages: IObservableArray<messageWithID> =
    observable.array<messageWithID>([], { deep: true });
}
