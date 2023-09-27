
export interface BaseTheme {
  [key: string]: string;
  '--root-font-size': string;
  '--font-size-sm': string;
  '--font-size-md': string;
  '--font-size-lg': string;
  '--font-size-xl': string;
  '--space-none': string;
  '--space-sm': string;
  '--space-md': string;
  '--space-lg': string;
  '--space-xl': string;
  '--transition': string;
  '--gray-1': string;
  '--gray-2': string;
  '--gray-3': string;
  '--gray-4': string;
  '--gray-5': string;
  '--gray-6': string;
  '--gray-7': string;
  '--gray-8': string;
  '--gray-9': string;
  '--gray-10': string;
  '--overlay': string;
  '--msg-danger': string;
  '--msg-warning': string;
  '--msg-success': string;
  '--msg-info': string;
  '--modal-layer': string;
  '--modal-fg-layer': string;
  '--flex-stretch': string;
  '--flex-fixed': string;
  '--text-center': string;
  '--rounded': string;
  '--vh-1': string;
  '--layer-1': string;
  '--layer-2': string;
  '--layer-3': string;
  '--layer-4': string;
  '--layer-5': string;
}

export const themeBase: BaseTheme = {
  '--root-font-size': '14px',
  '--font-size-sm': '.8rem',
  '--font-size-md': '1rem',
  '--font-size-lg': '1.5rem',
  '--font-size-xl': '2rem',
  '--vh-1': '1vh',
  '--space-none': '0',
  '--space-sm': '.25rem',
  '--space-md': '.5rem',
  '--space-lg': '1rem',
  '--space-xl': '2rem',
  '--transition': 'all .2s ease-in-out',
  '--gray-1': 'rgb(51, 51, 51)',
  '--gray-2': 'rgb(68, 68, 68)',
  '--gray-3': 'rgb(85, 85, 85)',
  '--gray-4': 'rgb(102, 102, 102)',
  '--gray-5': 'rgb(119, 119, 119)', 
  '--gray-6': 'rgb(136, 136, 136)', 
  '--gray-7': 'rgb(153, 153, 153)',
  '--gray-8': 'rgb(170, 170, 170)',
  '--gray-9': 'rgb(187, 187, 187)',
  '--gray-10': 'rgb(204, 204, 204)',
  '--overlay': 'rgba(196, 196, 196, 0.6)',
  '--msg-danger': 'rgb(255, 0, 0)',
  '--msg-warning': 'rgb(202, 180, 0)',
  '--msg-success': 'rgb(0, 163, 0)',
  '--msg-info': 'rgb(0, 115, 223)',
  '--modal-layer': '1005',
  '--modal-fg-layer': '1006',
  '--flex-stretch': '1',
  '--flex-fixed': '0',
  '--text-center': 'center',
  '--rounded': '5px',
  '--layer-1': '1',
  '--layer-2': '1000',
  '--layer-3': '2000',
  '--layer-4': '3000',
  '--layer-5': '9999',
};