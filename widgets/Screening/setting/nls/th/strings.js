///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "ตารางฟุต",
    "areaAcresUnit": "เอเคอร์",
    "areaSquareMetersUnit": "ตารางเมตร",
    "areaSquareKilometersUnit": "ตารางกิโลเมตร",
    "areaHectaresUnit": "เฮกตาร์",
    "areaSquareMilesUnit": "ตารางไมล์",
    "lengthFeetUnit": "ฟุต",
    "lengthMilesUnit": "ไมล์",
    "lengthMetersUnit": "เมตร",
    "lengthKilometersUnit": "กิโลเมตร"
  },
  "analysisTab": {
    "analysisTabLabel": "การวิเคราะห์",
    "selectAnalysisLayerLabel": "ชั้นข้อมูลที่มีการวิเคราะห์",
    "addLayerLabel": "เพิ่มชั้นข้อมูล",
    "noValidLayersForAnalysis": "ไม่พบชั้นข้อมูลที่ใช้ได้ในเว็บแมปที่เลือก",
    "noValidFieldsForAnalysis": "ไม่พบฟิลด์ที่ใช้ได้ในเว็บแมปที่เลือก โปรดลบชั้นข้อมูลที่เลือก",
    "allowGroupingLabel": "จัดกลุ่มฟีเจอร์ตามฟิลด์ที่มีค่าเหมือนกัน",
    "groupingHintDescription": "เคล็ดลับ: ตามค่าเริ่มต้น ฟีเจอร์ทั้งหมดที่มีค่าเหมือนกับฟิลด์ที่เลือกจะถูกจัดกลุ่มให้แสดงผลเป็นรายการเดียวในรายการ ปิดใช้งานการจัดกลุ่มตามแอตทริบิวต์ที่เหมือนกัน เพื่อแสดงผลรายการของแต่ละฟีเจอร์แทน",
    "addLayersHintText": "เคล็ดลับ: เลือกชั้นข้อมูลและฟิลด์เพื่อเพิ่มลงในการวิเคราะห์และรายงาน",
    "addLayerNameTitle": "ชื่อชั้นข้อมูล",
    "addFieldsLabel": "เพิ่มฟิลด์",
    "addFieldsPopupTitle": "เลือกฟิลด์",
    "addFieldsNameTitle": "ชื่อฟิลด์",
    "aoiToolsLegendLabel": "เครื่องมือพื้นที่ที่สนใจ",
    "aoiToolsDescriptionLabel": "เลือกและติดป้ายกำกับเครื่องมือที่พร้อมใช้งานในการสร้างพื้นที่ที่สนใจ",
    "placenameLabel": "ชื่อสถานที่",
    "drawToolsLabel": "เลือกเครื่องมือวาด",
    "uploadShapeFileLabel": "อัปโหลด shapefile",
    "coordinatesLabel": "ค่าพิกัด",
    "coordinatesDrpDwnHintText": "เคล็ดลับ: เลือกยูนิตที่จะแสดงเส้นขวางที่ป้อน",
    "coordinatesBearingDrpDwnHintText": "เคล็ดลับ: เลือกแบริงที่จะแสดงเส้นขวางที่ป้อน",
    "allowShapefilesUploadLabel": "อนุญาตให้ผู้ใช้อัปโหลด shapefile ที่จะเพิ่มลงในการวิเคราะห์",
    "allowShapefilesUploadLabelHintText": "เคล็ดลับ: เพิ่มตัวเลือกลงในแท็บ รายงาน ซึ่งผู้ใช้สามารถอัปโหลดข้อมูลของตัวเองในรูปแบบ shapefile เพื่อรวมไว้ในรายงานการวิเคราะห์",
    "allowVisibleLayerAnalysisLabel": "อย่าวิเคราะห์หรือรายงานผลสำหรับชั้นข้อมูลที่มองไม่เห็น",
    "allowVisibleLayerAnalysisHintText": "คำแนะนำ: ชั้นข้อมูลที่ถูกปิดหรือมองไม่เห็นเนื่องจากการตั้งค่าการแสดงผลของสเกลจะไม่ถูกวิเคราะห์หรือรวมไว้ในผลที่พิมพ์หรือดาวน์โหลด",
    "areaUnitsLabel": "หน่วยสำหรับผลการวิเคราะห์(พื้นที่)",
    "lengthUnitsLabel": "หน่วยสำหรับผลการวิเคราะห์(ความยาว)",
    "maxFeatureForAnalysisLabel": "จำนวนฟีเจอร์สูงสุดที่จะวิเคราะห์",
    "maxFeatureForAnalysisHintText": "เคล็ดลับ: ตั้งค่าจำนวนสูงสุดของฟีเจอร์ที่จะเพิ่มไว้ในการวิเคราะห์",
    "searchToleranceLabelText": "ระยะการค้นหา",
    "searchToleranceHint": "เคล็ดลับ: ระยะการค้นหา จะถูกใช้ในการวิเคราะห์อินพุทจุดและเส้น",
    "placenameButtonText": "ชื่อสถานที่",
    "drawToolsButtonText": "วาด",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "ค่าพิกัด",
    "invalidLayerErrorMsg": "โปรดกำหนดค่าฟิลด์สำหรับ",
    "drawToolSelectableLayersLabel": "เลือกชั้่นข้อมูลที่เลือกได้",
    "drawToolSelectableLayersHint": "เคล็ดลับ: เลือกชั้นข้อมูลที่มีฟีเจอร์ซึ่งสามารถเลือกโดยใช้เครื่องมือเลือกด้วยการวาด",
    "drawToolsSettingsFieldsetLabel": "เครื่องมือวาดภาพ",
    "drawToolPointLabel": "จุด",
    "drawToolPolylineLabel": "โพลีไลน์",
    "drawToolExtentLabel": "ขอบเขต",
    "drawToolPolygonLabel": "พื้นที่",
    "drawToolCircleLabel": "วงกลม",
    "selectDrawToolsText": "เลือกเครื่องมือการวาดที่พร้อมใช้งานสำหรับการสร้างพื้นที่ที่สนใจ",
    "selectingDrawToolErrorMessage": "เลือกเครื่องมือการวาดอย่างน้อยหนึ่งอย่าง หรือชั้นข้อมูลการเลือกที่จะใช้ตัวเลือกเครื่องมือการวาดสำหรับเครื่องมือ AOI"
  },
  "downloadTab": {
    "downloadLegend": "ดาวน์โหลดการตั้งค่า",
    "reportLegend": "การตั้งค่ารายงาน",
    "downloadTabLabel": "ดาวน์โหลด",
    "syncEnableOptionLabel": "ชั้นข้อมูล",
    "syncEnableOptionHint": "เคล็ดลับ: เลือกชั้นข้อมูลที่สามารถดาวน์โหลดและระบุรูปแบบที่แต่ละชั้นข้อมูลจะพร้อมใช้งาน ในชุดข้อมูลที่ดาวน์โหลดจะมีฟีเจอร์เหล่านั้น ซึ่งตัดกับพื้นที่ที่สนใจ",
    "syncEnableOptionNote": "หมายเหตุ: การดาวน์โหลดไฟล์ geodatabase และ shapefile จำเป็นต้องใช้ชั้นข้อมูลฟีเจอร์ที่เปิดใช้งานการซิงค์ เฉพาะชั้นข้อมูลฟีเจอร์ที่โฮสต์บน ArcGIS Online เท่านั้น จึงจะรองรับรูปแบบ shapefile",
    "extractDataTaskOptionLabel": "เซอร์วิสสำหรับประมวลผลทางภูมิศาสตร์สำหรับการแอคเทรคตัดข้อมูล",
    "extractDataTaskOptionHint": "เคล็ดลับ: ใช้เซอร์วิสการประมวลผลทางภูมิศาสตร์งานแยกข้อมูลที่เผยแพร่แล้ว เพื่อดาวน์โหลดฟีเจอร์ที่ตัดกับพื้นที่ที่สนใจในไฟล์ geodatabase หรือรูปแบบ shapefile",
    "cannotDownloadOptionLabel": "ปิดการดาวน์โหลด",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "ชื่อชั้นข้อมูล",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "ไฟล์ฐานข้อมูลภูมิศาสตร์",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "อนุญาตให้ดาวน์โหลด"
    },
    "setButtonLabel": "ตั้ง",
    "GPTaskLabel": "ระบุ URL เพื่อเซอร์วิสสำหรับประมวลผลทางภูมิศาสตร์",
    "printGPServiceLabel": "พิมพ์เซอร์วิส URL",
    "setGPTaskTitle": "ระบุ URL ของเซอร์วิสสำหรับประมวลผลทางภูมิศาสตร์ที่ต้องการ",
    "logoLabel": "โลโก้",
    "logoChooserHint": "เคล็ดลับ: คลิกไอคอนภาพเพื่อเปลี่ยนโลโก้ที่ปรากฏในมุมซ้ายบนของรายงาน",
    "footnoteLabel": "เชิงอรรถ",
    "columnTitleColorPickerLabel": "สีชื่อคอลัมน์รายงาน",
    "reportTitleLabel": "ชื่อรายงาน",
    "displaySummaryLabel": "แสดงผลสรุปข้อมูล",
    "hideZeroValueRowLabel": "ซ่อนแถวที่มีค่า 0 สำหรับฟิลด์การวิเคราะห์ทั้งหมด",
    "hideNullValueRowLabel": "ซ่อนแถวที่ไม่มีค่าข้อมูล (นัลหรือว่างเปล่า) สำหรับฟิลด์การวิเคราะห์ทั้งหมด",
    "errorMessages": {
      "invalidGPTaskURL": "เซอร์วิสการประมวลผลทางภูมิศาสตร์ไม่ถูกต้อง โปรดเลือกเซอร์วิสการประมวลผลข้อมูลทางภูมิศาสตร์ที่มีงานแยกข้อมูล",
      "noExtractDataTaskURL": "โปรดเลือกเซอร์วิสการประมวลผลข้อมูลทางภูมิศาสตร์ที่มีงานแยกข้อมูล",
      "duplicateCustomOption": "มีรายการซ้ำสำหรับ ${duplicateValueSizeName} อยู่แล้ว",
      "invalidLayoutWidth": "ความกว้างที่ป้อนสำหรับ ${customLayoutOptionValue} ไม่ถูกต้อง",
      "invalidLayoutHeight": "ความสูงที่ป้อนสำหรับ ${customLayoutOptionValue} ไม่ถูกต้อง",
      "invalidLayoutPageUnits": "หน่วยของหน้าที่เลือกสำหรับ ${customLayoutOptionValue} ไม่ถูกต้อง",
      "failtofetchbuddyTaskDimension": "เกิดข้อผิดพลาดขณะดึงข้อมูลขนาดงานบัดดี้ โปรดลองอีกครั้ง",
      "failtofetchbuddyTaskName": "เกิดข้อผิดพลาดขณะดึงข้อมูลชื่องานบัดดี้ โปรดลองอีกครั้ง",
      "failtofetchChoiceList": "เกิดข้อผิดพลาดขณะดึงข้อมูลรายการเลือกจากบริการพิมพ์ โปรดลองอีกครั้ง",
      "invalidWidth": "ความกว้างไม่ถูกต้อง",
      "invalidHeight": "ความสูงไม่ถูกต้อง"
    },
    "addCustomLayoutTitle": "เพิ่มเค้าโครงที่กำหนดเอง",
    "customLayoutOptionHint": "เคล็ดลับ: เพิ่มเค้าโครงจากเซอร์วิสพิมพ์ของคุณลงในรายการตัวเลือกการพิมพ์",
    "reportDefaultOptionLabel": "เค้าโครงเริ่มต้น",
    "pageSizeUnits": {
      "millimeters": "มิลลิเมตร",
      "points": "จุด"
    },
    "noDataTextRepresentation": "ไม่มีค่าข้อมูล",
    "naTextRepresentation": "ไม่ใช่ค่าที่ใช้ได้",
    "noDataDefaultText": "ไม่มีข้อมูล",
    "notApplicableDefaultText": "N/A"
  },
  "generalTab": {
    "generalTabLabel": "ทั่วไป",
    "tabLabelsLegend": "ป้ายกำกับแผงควบคุม",
    "tabLabelsHint": "คำแนะนำ: ระบุป้ายกำกับ",
    "AOITabLabel": "แผงควบคุมพื้นที่ที่สนใจ",
    "ReportTabLabel": "แผงควบคุมรายงาน",
    "bufferSettingsLegend": "การตั้งค่าบัฟเฟอร์",
    "defaultBufferDistanceLabel": "ระยะทางบัฟเฟอร์เริ่มต้น",
    "defaultBufferUnitsLabel": "บัฟเฟอร์ยูนิต",
    "generalBufferSymbologyHint": "เคล็ดลับ: สัญลักษณ์ที่จะใช้เพื่อระบุพื้นที่บัฟเฟอร์รอบ ๆ พื้นที่ที่สนใจที่กำหนด",
    "aoiGraphicsSymbologyLegend": "สัญลักษณ์พื้นที่ที่สนใจ",
    "aoiGraphicsSymbologyHint": "เคล็ดลับ: สัญลักษณ์ที่ใช้ในการระบุจุด เส้น และโพลีกอนพื้นที่ที่สนใจ",
    "pointSymbologyLabel": "จุด",
    "previewLabel": "ภาพตัวอย่าง",
    "lineSymbologyLabel": "เส้น",
    "polygonSymbologyLabel": "พื้นที่",
    "aoiBufferSymbologyLabel": "สัญลักษณ์บัฟเฟอร์",
    "pointSymbolChooserPopupTitle": "สัญลักษณ์ที่อยู่หรือตำแหน่งจุด",
    "polygonSymbolChooserPopupTitle": "สัญลักษณ์โพลีกอน",
    "lineSymbolChooserPopupTitle": "สัญลักษณ์เส้น",
    "aoiSymbolChooserPopupTitle": "สัญลักษณ์บัฟเฟอร์",
    "aoiTabText": "AOI",
    "reportTabText": "รายงาน",
    "invalidSymbolValue": "ค่าสัญลักษณ์ไม่ถูกต้อง"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "ตั้งค่าการค้นหาแหล่งที่มา",
    "searchSourceSettingTitle": "ตั้งค่าการค้นหาแหล่งที่มา",
    "searchSourceSettingTitleHintText": "เพิ่ม และกำหนดค่าบริการค้นหาตำแหน่งจีโอโค้ดเซอร์วิส หรือชั้นข้อมูลเป็นข้อมูลในการค้นหา ข้อมูลที่ระบุนี้จะใช้ในการค้นหาภายในช่องค้นหา",
    "addSearchSourceLabel": "เพิ่มช่องค้นหาแหล่งที่มา",
    "featureLayerLabel": "ชั้นข้อมูลฟีเจอร์",
    "geocoderLabel": "Geocoder",
    "generalSettingLabel": "การตั้งค่าทั่วไป",
    "allPlaceholderLabel": "ใส่ข้อความสำหรับการค้นหาทั้งหมด",
    "allPlaceholderHintText": "คำแนะนำ: ป้อนข้อความที่จะแสดงคำเริ่มต้น ในขณะที่ทำการค้นหาชั้นข้อมูลทั้งหมด และจีโอโค้ด",
    "generalSettingCheckboxLabel": "แสดงป๊อปอัพสำหรับคุณลักษณะ หรือสถานที่",
    "countryCode": "ประเทศหรือรหัสภูมิภาค(s)",
    "countryCodeEg": "ตัวอย่าง ",
    "countryCodeHint": "ปล่อยให้เป็นค่าว่างจะค้นหาทุกประเทศและภูมิภาค",
    "questionMark": "?",
    "searchInCurrentMapExtent": "ค้นหาเฉพาะในขอบเขตแผนที่ปัจจุบัน",
    "locatorUrl": "URL เครื่องระบุตำแหน่ง",
    "locatorName": "ชื่อเครื่องมือระบุตำแหน่ง",
    "locatorExample": "ตัวอย่าง",
    "locatorWarning": "รุ่นของบริการรหัสเชิงพื้นที่นี้ไม่ได้รับการสนับสนุน เครื่องมือสนับสนุนบริการรหัสเชิงพื้นที่ 10.0 และสูงกว่า",
    "locatorTips": "ข้อเสนอแนะจะไม่สามารถใช้ได้เนื่องจากบริการเชิงพื้นที่ ไม่สนับสนุนความสามารถในการแนะนำ",
    "layerSource": "ชั้นข้อมูลแหล่งที่มา",
    "setLayerSource": "ตั้งชั้นข้อมูลแหล่งที่มา",
    "setGeocoderURL": "ตั้งรหัสเชิงพื้นที่ URL",
    "searchLayerTips": "ข้อเสนอแนะจะไม่สามารถใช้ได้เนื่องจากบริการคุณลักษณะไม่สนับสนุนความสามารถในการแบ่งหน้า",
    "placeholder": "ตัวอักษรที่จองที่ไว้สำหรับคำที่ใช้งานจริง",
    "searchFields": "ค้นหาฟิลด์",
    "displayField": "ฟิลด์ที่แสดง",
    "exactMatch": "สอดคล้องอย่างยิ่ง",
    "maxSuggestions": "คำแนะนำมากสุด",
    "maxResults": "ผลลัพธ์สูงสุด",
    "enableLocalSearch": "เปิดใช้งานการค้นหาในโปรแกรม",
    "minScale": "มาตราส่วน",
    "minScaleHint": "เมื่อมาตราส่วนของแผนที่มากกว่ามาตราส่วนนี้ จะสามารถใช้งานการค้นหาในโปรแกรมได้",
    "radius": "รัศมี",
    "radiusHint": "ระบุรัศมีของบริเวณโดยรอบศูนย์กลางของแผนที่ปัจจุบัน เพื่อใช้ในการเพิ่มอันดับของผลลัพธ์จากตัวเลือกในการระบุพิกัดทางภูมิศาสตร์ โดยตัวเลือกที่อยู่ใกล้ที่สุดจะถูกส่งกลับมาก่อน",
    "setSearchFields": "ตั้งการค้นหาฟิลด์",
    "set": "ตั้ง",
    "invalidUrlTip": "URL ${URL} ไม่ถูกต้อง หรือไม่สามารถเข้าถึงได้",
    "invalidSearchSources": "การตั้งค่าแหล่งข้อมูลสำหรับค้นหาไม่ถูกต้อง"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "โปรดป้อนข้อมูลลงในฟิลด์ที่จำเป็น",
    "bufferDistanceFieldsErrorMsg": "โปรดป้อนค่าที่ถูกต้อง",
    "invalidSearchToleranceErrorMsg": "โปรดป้อนค่าที่ถูกต้องสำหรับความทนทานในการค้นหา",
    "atLeastOneCheckboxCheckedErrorMsg": "การกำหนดค่าไม่ถูกต้อง: จำเป็นต้องมีอย่างน้อยหนึ่งเครื่องมือพื้นที่ที่สนใจ",
    "noLayerAvailableErrorMsg": "ไม่มีชั้นข้อมูลที่ทำงานได้0",
    "layerNotSupportedErrorMsg": "ไม่สนับสนุน ",
    "noFieldSelected": "โปรดใช้การแก้ไขเพื่อเลือกเขตข้อมูลสำหรับการวิเคราะห์",
    "duplicateFieldsLabels": "เพิ่มป้ายกำกับ \"${labelText}\" ที่เพิ่มไว้สำหรับ: \"${itemNames}\"",
    "noLayerSelected": "โปรดเลือกอย่างน้อยหนึ่งชั้นข้อมูลสำหรับการวิเคราะห์",
    "errorInSelectingLayer": "ไม่สามารถเลือกชั้นข้อมูลได้ โปรดลองอีกครั้ง",
    "errorInMaxFeatureCount": "โปรดป้อนจำนวนฟีเจอร์สูงสุดสำหรับการวิเคราะห์"
  }
});