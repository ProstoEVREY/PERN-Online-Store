import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }
    setSelectedBrand(brand){
        this.setPage(1)
    this._selectedBrand = brand
    }
    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setLimit(limit){
        this._limit = limit
    }
    setPage(page){
        this._devices = page
    }
    setTotalCount(totalCount){
        this._devices = totalCount
    }


    get selectedBrand(){
        return this._selectedBrand
    }

    get selectedType(){
        return this._selectedType
    }
    get devices(){
        return this._devices
    }
    get brands(){
        return this._brands
    }
    get types(){
        return this._types
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
    get totalCount(){
        return this._totalCount
    }
}