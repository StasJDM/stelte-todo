import { isActiveDialog } from '../store';

export interface DialogQueueItem {
  id: number;
  component: any;
  callback: (event: any) => void;
}

export class DialogService {
  private static instance: DialogService;

  private constructor() {}

  public static getInstance(): DialogService {
    if (!DialogService.instance) {
      DialogService.instance = new DialogService();
    }

    return DialogService.instance;
  }

  private _isActive: boolean = false;
  private _currentDialogId: number;
  private _dialogQueue: DialogQueueItem[] = [];

  public get isActive(): boolean {
    return this._isActive;
  }

  public get component() {
    return this._currentDialog.component;
  }

  private get _currentDialog(): DialogQueueItem {
    return this._dialogQueue.find((currentDialog) => currentDialog.id === this._currentDialogId);
  }

  public showDialog(component, callback): void {
    isActiveDialog.update((v) => true);

    const id = this._dialogQueue.length;

    this._currentDialogId = id;
    this._dialogQueue.push({ id, component, callback });
  }

  public closeDialog(event: CustomEvent): void {
    isActiveDialog.update((v) => false);
    this._currentDialog.callback(event.detail);
  }
}
