export interface IRecentPics {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
    imgUrl: string;
}

export interface IRecentPhotos {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo:IRecentPics[];
}