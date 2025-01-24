define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AnnualRevenue"
			},
			{
				"operation": "remove",
				"name": "AddressSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "AddressSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AddressSearchFilter_AddressList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"AddressList"
										]
									}
								]
							}
						],
						"from": [
							"AddressSearchFilter_SearchValue",
							"AddressSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "BankingDetailsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "BankingDetailsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "BankingDetailsSearchFilter_GridDetail_qpp45xn",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_qpp45xn"
										]
									}
								]
							}
						],
						"from": [
							"BankingDetailsSearchFilter_SearchValue",
							"BankingDetailsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "ContactsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "ContactsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ContactsSearchFilter_ContactsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ContactsList"
										]
									}
								]
							}
						],
						"from": [
							"ContactsSearchFilter_SearchValue",
							"ContactsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "LeadSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "LeadSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LeadSearchFilter_LeadList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"LeadList"
										]
									}
								]
							}
						],
						"from": [
							"LeadSearchFilter_SearchValue",
							"LeadSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "RecommendedProductSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "RecommendedProductSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "RecommendedProductSearchFilter_RecommendedProductList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"RecommendedProductList"
										]
									}
								]
							}
						],
						"from": [
							"RecommendedProductSearchFilter_SearchValue",
							"RecommendedProductSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "OrderSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "OrderSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OrderSearchFilter_OrderList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"OrderList"
										]
									}
								]
							}
						],
						"from": [
							"OrderSearchFilter_SearchValue",
							"OrderSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "OpportunitySearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "OpportunitySearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OpportunitySearchFilter_OpportunityList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"OpportunityList"
										]
									}
								]
							}
						],
						"from": [
							"OpportunitySearchFilter_SearchValue",
							"OpportunitySearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "DocumentSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "DocumentSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "DocumentSearchFilter_DocumentList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DocumentList"
										]
									}
								]
							}
						],
						"from": [
							"DocumentSearchFilter_SearchValue",
							"DocumentSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "ContractSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "ContractSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ContractSearchFilter_ContractList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ContractList"
										]
									}
								]
							}
						],
						"from": [
							"ContractSearchFilter_SearchValue",
							"ContractSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "InvoiceSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "InvoiceSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "InvoiceSearchFilter_InvoiceList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"InvoiceList"
										]
									}
								]
							}
						],
						"from": [
							"InvoiceSearchFilter_SearchValue",
							"InvoiceSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "CasesSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "CasesSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CasesSearchFilter_CasesList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"CasesList"
										]
									}
								]
							}
						],
						"from": [
							"CasesSearchFilter_SearchValue",
							"CasesSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "ServiceAgreementsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ServiceAgreementsSearchFilter_ServiceAgreementsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ServiceAgreementsList"
										]
									}
								]
							}
						],
						"from": [
							"ServiceAgreementsSearchFilter_SearchValue",
							"ServiceAgreementsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "WebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrWebsiteCode_heacsv8",
					"labelPosition": "auto",
					"control": "$PDS_UsrWebsiteCode_heacsv8",
					"multiline": false
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
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
					"PDS_UsrWebsiteCode_heacsv8": {
						"modelConfig": {
							"path": "PDS.UsrWebsiteCode"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AddressList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "AddressList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "AddressSearchFilter_AddressList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ContactsList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "ContactsList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "ContactsSearchFilter_ContactsList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CasesList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "CasesSearchFilter_CasesList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"InvoiceList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "InvoiceList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "InvoiceSearchFilter_InvoiceList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"OrderList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "OrderList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "OrderSearchFilter_OrderList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ContractList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "ContractList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "ContractSearchFilter_ContractList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_qpp45xn",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "BankingDetailsSearchFilter_GridDetail_qpp45xn",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DocumentList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "DocumentSearchFilter_DocumentList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ServiceAgreementsList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "ServiceAgreementsList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "ServiceAgreementsSearchFilter_ServiceAgreementsList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"RecommendedProductList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "RecommendedProductList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "RecommendedProductSearchFilter_RecommendedProductList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"OpportunityList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "OpportunityList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "OpportunitySearchFilter_OpportunityList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"LeadList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "LeadList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LeadSearchFilter_LeadList",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});