define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "51a619b9-9bb8-4a63-b6a6-a8490be9c60e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ButtonMenuWithItems",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ButtonMenuWithItems_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalcAvgPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcualteAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyId"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "ButtonMenuWithItems",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "checkmark-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_d53h2td",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_d53h2td"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_m0jezgq",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_m0jezgq"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Comission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrComission_xat4umt",
					"labelPosition": "auto",
					"control": "$PDS_UsrComission_xat4umt",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_ohqy8nf",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_ohqy8nf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_w30nqp3",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_w30nqp3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_xwneups",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xwneups_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_ii870f7",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_ii870f7",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_sjbd1xz",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_sjbd1xz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_uhzbu68",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_uhzbu68",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_ims8k4x",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_ims8k4x",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_rtpbtf2",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_rtpbtf2",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrComissionPercent_r0szxvw",
					"control": "$PDS_UsrOfferTypeUsrComissionPercent_r0szxvw",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_j3yvdnz",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_j3yvdnz_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_o0fc074",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_j3yvdnz",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ilnh5u2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_o0fc074",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_dou17lp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_dou17lp_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default",
					"menuItems": []
				},
				"parentName": "FlexContainer_ilnh5u2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_682sdyl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_682sdyl_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_4zx9y4qDS"
						}
					}
				},
				"parentName": "FlexContainer_ilnh5u2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_8s21f25",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_8s21f25_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ilnh5u2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_bi6ymqi",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_bi6ymqi_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8s21f25",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_o8fna31",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_o8fna31_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8s21f25",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_qig7qsk",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_qig7qsk_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_qig7qsk_GridDetail_4zx9y4q",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_4zx9y4q"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_qig7qsk_SearchValue",
							"GridDetailSearchFilter_qig7qsk_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ilnh5u2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_clyyhjq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_j3yvdnz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
					},
					"items": "$GridDetail_4zx9y4q",
					"activeRow": "$GridDetail_4zx9y4q_ActiveRow",
					"selectionState": "$GridDetail_4zx9y4q_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_4zx9y4q_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_4zx9y4qDS_Id",
					"columns": [
						{
							"id": "0b643be9-54f8-bbcc-513f-06e68dca97dc",
							"code": "GridDetail_4zx9y4qDS_UsrComment",
							"caption": "#ResourceString(GridDetail_4zx9y4qDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "2438a5b9-1502-2864-6de6-e15d925f54ba",
							"code": "GridDetail_4zx9y4qDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_4zx9y4qDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "399aa32b-d391-031a-6f9d-ff355fc53315",
							"code": "GridDetail_4zx9y4qDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_4zx9y4qDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "6d008155-c5f4-7719-fa45-d75968d9d15d",
							"code": "GridDetail_4zx9y4qDS_UsrComment",
							"caption": "#ResourceString(GridDetail_4zx9y4qDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "19fca93a-fe24-e3ed-130c-48e05e2f3706",
							"code": "GridDetail_4zx9y4qDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_4zx9y4qDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "47792bf1-1470-f13e-9870-d9eb3b1d4370",
							"code": "GridDetail_4zx9y4qDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_4zx9y4qDS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_clyyhjq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4zx9y4q_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Добавить тег",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_4zx9y4qDS",
							"filters": "$GridDetail_4zx9y4q | crt.ToCollectionFilters : 'GridDetail_4zx9y4q' : $GridDetail_4zx9y4q_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4zx9y4q_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4zx9y4q_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить тег",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_4zx9y4qDS",
							"filters": "$GridDetail_4zx9y4q | crt.ToCollectionFilters : 'GridDetail_4zx9y4q' : $GridDetail_4zx9y4q_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4zx9y4q_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_4zx9y4q_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4zx9y4q_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Экспорт в Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_4zx9y4q | crt.ToCollectionFilters : 'GridDetail_4zx9y4q' : $GridDetail_4zx9y4q_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4zx9y4q_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_4zx9y4q_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_4zx9y4qDS",
							"filters": "$GridDetail_4zx9y4q | crt.ToCollectionFilters : 'GridDetail_4zx9y4q' : $GridDetail_4zx9y4q_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4zx9y4q_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_d53h2td": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_m0jezgq": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_ohqy8nf": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrComment_ii870f7": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrOfferType_w30nqp3": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrManager_sjbd1xz": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_rtpbtf2": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_uhzbu68": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_ims8k4x": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrComission_xat4umt": {
						"modelConfig": {
							"path": "PDS.UsrComission"
						}
					},
					"PDS_UsrOfferTypeUsrComissionPercent_r0szxvw": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrComissionPercent_r0szxvw"
						}
					},
					"GridDetail_4zx9y4q": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_4zx9y4qDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_qig7qsk_GridDetail_4zx9y4q",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_4zx9y4qDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_4zx9y4qDS.UsrComment"
									}
								},
								"GridDetail_4zx9y4qDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_4zx9y4qDS.UsrVisitDateTime"
									}
								},
								"GridDetail_4zx9y4qDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_4zx9y4qDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_4zx9y4qDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_4zx9y4qDS.CreatedOn"
									}
								},
								"GridDetail_4zx9y4qDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_4zx9y4qDS.UsrParentRealty"
									}
								},
								"GridDetail_4zx9y4qDS_Id": {
									"modelConfig": {
										"path": "GridDetail_4zx9y4qDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_4zx9y4qDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrComissionPercent_r0szxvw": {
									"path": "UsrOfferType.UsrComissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_4zx9y4qDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			request: "usr.PushButtonRequest",
			/* Implementation of custom query handler. */
			handler: async (request,next) => {
				console.log("Button works...");
				Terrasoft.showInformation("My button was pressed.");
				var price = await request.$context.PDS_UsrPrice_d53h2td; // ClassicUI: var price = this.get("UsrPrice");
				console.log("Price = " + price);
				request.$context.PDS_UsrArea_m0jezgq = price * 0.2; // ClassicUI: var price = this.set("UsrPrice", price * 0.2);
				/* Call the next handler if it exists and return its result. */
				return next?.handle(request);
				}
			},
						{
			request: "crt.HandleViewModelAttributeChangeRequest",
			/* The custom implementation of the system query handler. */
			handler: async (request,next) => {
					if (request.attributeName === 'PDS_UsrPrice_d53h2td' ||
					   request.attributeName === 'PDS_UsrOfferTypeUsrComissionPercent_r0szxvw') {
						var price = await request.$context.PDS_UsrPrice_d53h2td;
						var percent = await request.$context.PDS_UsrOfferTypeUsrComissionPercent_r0szxvw;
						var comission = price * percent/100;
						request.$context.PDS_UsrComission_xat4umt = comission;
					   }
					return next?.handle(request);
				}
			}
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
		    /* Implement a custom validator type. */
		    "usr.DGValidator": {
		        /* Business logic of the validator. */
		        "validator": function (config) {
		            return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": {message: config.message}
							};
						};
						return result;
		            };
		        },
		        /* Validator parameters. */
		        "params": [
		            {
		                "name": "minValue"
		            },
		            {
		                "name": "message"
		            }
		        ],
		        "async": false
		    }
		}/**SCHEMA_VALIDATORS*/
	};
});