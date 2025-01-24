namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cd3237f8-7f26-40a9-a598-a0f60574d1a9");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ed1b11fa-2a97-4f83-b24b-f197be38dd3b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,27,252,31,6,209,131,4,102,73,174,113,27,168,141,91,10,33,45,177,146,75,232,97,189,26,43,91,246,67,236,174,156,186,197,255,189,179,90,43,86,228,20,242,78,171,153,55,111,230,141,198,112,141,190,225,2,161,68,231,184,183,219,192,150,214,108,101,221,58,30,164,53,211,201,223,233,4,8,173,151,166,134,245,222,7,212,243,97,104,88,168,181,53,255,77,58,100,43,19,100,144,232,223,195,97,171,29,154,208,83,31,187,240,190,139,221,72,26,194,160,203,215,226,9,53,191,37,15,240,9,178,123,239,238,144,171,176,207,138,159,211,73,42,107,218,141,146,2,132,226,222,67,202,190,33,116,5,11,238,241,141,68,18,57,110,96,160,103,119,52,179,172,16,118,86,86,240,221,172,249,142,156,228,118,243,11,69,0,143,166,66,55,131,36,184,192,45,217,234,100,63,187,218,3,22,39,185,129,114,196,134,166,96,47,106,189,12,22,243,215,180,164,11,174,179,67,206,243,20,40,82,193,136,92,161,144,154,43,104,156,20,113,77,169,138,125,197,80,238,27,172,150,86,181,218,60,112,213,226,199,35,245,58,143,171,252,17,249,217,184,181,220,66,158,148,174,225,242,162,71,241,154,52,114,21,129,236,155,95,114,35,80,97,69,67,4,215,226,188,255,71,67,248,224,226,73,208,81,122,94,99,137,186,81,60,196,177,13,62,195,141,21,92,201,63,124,163,112,221,241,242,163,153,123,143,142,174,214,208,242,233,100,217,29,122,219,58,65,36,235,72,101,118,222,38,226,116,47,233,208,178,25,100,103,29,60,235,86,83,90,187,144,117,122,103,5,43,237,177,127,241,14,19,52,124,10,176,47,214,105,30,242,145,57,106,123,201,46,22,31,206,118,29,17,158,156,125,238,204,175,126,11,108,162,189,190,126,76,63,156,62,15,253,84,221,227,240,15,185,9,112,71,229,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("d20ef6e6-fbfe-d40f-7010-65ed821942f3"),
				Name = "ValueTooBig",
				CreatedInPackageId = new Guid("ed1b11fa-2a97-4f83-b24b-f197be38dd3b"),
				CreatedInSchemaUId = new Guid("cd3237f8-7f26-40a9-a598-a0f60574d1a9"),
				ModifiedInSchemaUId = new Guid("cd3237f8-7f26-40a9-a598-a0f60574d1a9")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cd3237f8-7f26-40a9-a598-a0f60574d1a9"));
		}

		#endregion

	}

	#endregion

}

