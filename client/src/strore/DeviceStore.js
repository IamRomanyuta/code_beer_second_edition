import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Пиво" },
      { id: 2, name: "Сидр" },
      { id: 3, name: "Лимонад" },
      { id: 4, name: "Кока-кола" },
      { id: 5, name: "Сок" },
    ];
    this._brands = [
      { id: 1, name: "Таркос" },
      { id: 2, name: "ColdRiver" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Секрет Пивовара",
        rating: 5,
        img: "https://shop.miratorg.ru/upload/iblock/622/RN211304.jpg",
      },
      {
        id: 2,
        name: "Секрет Пивовара",
        rating: 5,
        img: "https://shop.miratorg.ru/upload/iblock/622/RN211304.jpg",
      },
      {
        id: 3,
        name: "Секрет Пивовара",
        rating: 5,
        img: "https://shop.miratorg.ru/upload/iblock/622/RN211304.jpg",
      },
      {
        id: 4,
        name: "Секрет Пивовара",
        rating: 5,
        img: "https://shop.miratorg.ru/upload/iblock/622/RN211304.jpg",
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevice(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get Types() {
    return this._types;
  }
  get Brands() {
    return this._brands;
  }
  get Devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
}
