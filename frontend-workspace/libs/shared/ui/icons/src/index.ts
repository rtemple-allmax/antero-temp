import {
  faFile, faGauge, faBoxArchive, faClipboardList, faFolderOpen, faClock, faImage, faLocationDot, faExclamation,
  faTriangleExclamation, faUserClock, faTags, faPeopleCarryBox, faUserGear, faMagnifyingGlassChart, faToolbox,
  faHeartPulse, faStar, faPlus, faPenToSquare, faXmark, faEllipsis, faNetworkWired, faTableColumns, faTableCellsLarge,
  faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faDownload, faMagnifyingGlass, faArrowRotateRight, faCheck,
  faCompress, faExpand, faUser, faBell, faMobileScreen, faAt, faCalendarDays, faFilter, faCircle, faObjectUngroup,
  faComments, faJoint, faHouse, faScrewdriverWrench, faInbox, faGears, faFilePen, faNoteSticky, faBookOpenReader,
  faFileExcel, faFileWord, faFilePdf, faFilePowerpoint, faFileImage, faFloppyDisk, faCopy, faArrowRightFromBracket,
  faArrowRightToBracket, faPowerOff, faFileZipper, faList, faRectangleList, faObjectGroup, faDownLeftAndUpRightToCenter,
  faArrowUpRightAndArrowDownLeftFromCenter, faShelves, faArrowUpRightFromSquare, faCircleXmark, faGlobe, faMap, faArrowRight,
  faCircleQuestion, faUserMagnifyingGlass, faCartShopping, faCartFlatbedBoxes, faAddressCard, faColumns3, faEllipsisV, faTemperatureFull, faGaugeMax, faGaugeSimple, faEnvelopesBulk, faWavePulse, faGripVertical
} from '@fortawesome/pro-regular-svg-icons';

import * as solid from '@fortawesome/pro-solid-svg-icons'
import * as light from '@fortawesome/pro-light-svg-icons'
import * as thin from '@fortawesome/pro-thin-svg-icons'

export const eqSectionIcons = {
  detailsIcon: faFile,
  instrumentsIcon: faGauge,
  partsIcon: faBoxArchive,
  templatesIcon: faClipboardList,
  activeWorkIcon: faFolderOpen,
  workHistoryIcon: faClock,
  documentsIcon: faFile,
  imagesIcon: faImage,
  mapIcon: faLocationDot
}

export const workOrderIcons = {
  delinquentIcon: faExclamation,
  needsAttentionIcon: faTriangleExclamation,
  laborIcon: faUserClock,
  miscIcon: faTags,
  contractorIcon: faPeopleCarryBox,
  taskIcon: faUserGear,
  auditIcon: faMagnifyingGlassChart,
  toolsIcon: faToolbox,
  statusIcon: faHeartPulse,
  priorityIcon: faStar
}

export const toolbarIcons = {
  addIcon: faPlus,
  editIcon: faPenToSquare,
  deleteIcon: faXmark,
  moreIcon: faEllipsis,
  otherIcon: faNetworkWired,
  decrementIcon: faAngleLeft,
  incrementIcon: faAngleRight,
  upIcon: faAngleUp,
  downIcon: faAngleDown,
  downloadIcon: faDownload,
  searchIcon: faMagnifyingGlass,
  refreshIcon: faArrowRotateRight,
  columnChooserIcon: faColumns3
}

export const confirmIcons = {
  confirmIcon: faCheck,
  cancelIcon: faXmark
}

export const miscIcons = {
  downCaretIcon: faAngleDown,
  noImageIcon: faImage,
  collapseIcon: faCompress,
  expandIcon: faExpand,
  userIcon: faUser,
  miscIcon: faTags,
  mapIcon: faLocationDot,
  bellIcon: faBell,
  phoneIcon: faMobileScreen,
  emailIcon: faAt,
  calendarIcon: faCalendarDays,
  filterIcon: faFilter,
  noStatus: faCircle,
  hasStatus: faCircle,
  groupIcon: faObjectUngroup,
  commentsIcon: faComments,
  moreIcon: faEllipsisV,
  bulkIcon: faEnvelopesBulk,
  funIcon: faJoint,
  saveIcon: faFloppyDisk,
  listIcon: faTableColumns,
  gridIcon: faTableCellsLarge,
  copyIcon: faCopy,
  outIcon: faArrowRightFromBracket,
  inIcon: faArrowRightToBracket,
  powerIcon: faPowerOff,
  zipIcon: faFileZipper,
  subListIcon: faList,
  rectangleListIcon: faRectangleList,
  objectGroupIcon: faObjectGroup,
  swneCenterIcon: faDownLeftAndUpRightToCenter,
  swneIcon: faArrowUpRightAndArrowDownLeftFromCenter,
  ungroupIcon: faObjectUngroup,
  stockLocationIcon: faShelves,
  openIcon: faArrowUpRightFromSquare,
  clearIcon: faCircleXmark,
  satelliteIcon: faGlobe,
  streetsIcon: faMap,
  meterIcon: faTemperatureFull,
  guageIcon: faGaugeSimple,
  activityIcon: faWavePulse,
  primaryIcon: faStar,
  arrowRightIcon: faArrowRight,
  dragIcon: solid.faGripVertical
}

export const navIcons = {
  homeIcon: faHouse,
  toolsIcon: faScrewdriverWrench,
  workRequestIcon: faCircleQuestion,
  workReviewIcon: faUserMagnifyingGlass, 
  workSetupIcon: faClipboardList,
  myWorkIcon: faInbox,
  currentWorkIcon: faFolderOpen,
  historyIcon: faClock,
  equipmentIcon: faGears,
  partsIcon: faBoxArchive,
  orderingIcon: faCartFlatbedBoxes,
  suppliersIcon: faAddressCard,
  reportIcon: faFilePen,
  notesIcon: faNoteSticky,
  auditIcon: faBookOpenReader,
  adminIcon: faUserGear,
  contractorsIcon: faPeopleCarryBox
}

export const fileIcons = {
  excelIcon: thin.faFileExcel,
  wordIcon: thin.faFileWord,
  pdfIcon: thin.faFilePdf,
  powerpointIcon: thin.faFilePowerpoint,
  imageIcon: thin.faFileImage,
  fileIcon: thin.faFile
}

export const thickIcons = {
  thickPriorityIcon: solid.faStar,
  thickClockIcon: solid.faClock,
  thickStatusIcon: solid.faCircle,
  thickClearIcon: solid.faCircleXmark,
  thickDelinquentIcon: solid.faExclamation,
  thickNeedsAttentionIcon: solid.faTriangleExclamation,
  thickCircleIcon: solid.faCircle,
  thickFileIcon: faFile,
  thickFavoriteIcon: solid.faHeart, 
  thickVisibilityIcon: solid.faEye
}

export const getIconByExtension = (ext: string): any => {
  switch(ext.toLowerCase()) {
    case 'doc':
    case 'docm':
    case 'docx':
    case 'dot':
    case 'dotm':
    case 'dotx':
    case 'odt':
    case 'rtf':
    case 'wps':
    case 'xml':
    case 'xps':
      return fileIcons.wordIcon;
    case 'xlsx':
    case 'xlsm':
    case 'xlsb':
    case 'xltx':
    case 'xltm':
    case 'xls':
    case 'csv':
    case 'dbf':
    case 'dif':
    case 'ods':
    case 'pm':
    case 'slk':
    case 'xla':
    case 'xlam':
    case 'xlt':
    case 'xlw':
      return fileIcons.excelIcon;
    case 'pdf':
      return fileIcons.pdfIcon;
    case 'txt':
      return fileIcons.fileIcon;
    case 'jpe':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'png':
    case 'bmp':
    case 'ico':
    case 'svg':
    case 'svgz':
    case 'tif':
    case 'tiff':
    case 'ai':
    case 'drw':
    case 'pct':
    case 'psp':
    case 'xcf':
    case 'psd':
    case 'raw':
    case 'webp':
    case 'heic':
      return fileIcons.imageIcon;
    default:
      return fileIcons.fileIcon; 
  }
}

export const allIcons = {
  ...eqSectionIcons,
  ...workOrderIcons,
  ...toolbarIcons,
  ...confirmIcons,
  ...miscIcons,
  ...navIcons,
  ...fileIcons,
  ...thickIcons
} 