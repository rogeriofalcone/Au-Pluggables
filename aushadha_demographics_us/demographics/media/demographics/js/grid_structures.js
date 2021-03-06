define(function () {

    return {
        PATIENT: [
            {
                name: "ID",
                field: "id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                  },
            {
                name: "Edit",
                field: "edit",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                  },
            {
                name: "Del",
                field: "del",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                  },
            {
                name: "Visit",
                field: "visitadd",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                  },
            {
                name: "Adm",
                field: "admissionadd",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                  },

            {
                name: "Patient ID",
                field: "patient_hospital_id",
                width: "75px",
                cellStyles: "text-align:center;"
                  },
            {
                name: "First Name",
                field: "first_name",
                width: "100px",
                hidden: true,
                cellStyles: "text-align:center;"
                  },
            {
                name: "Middle Name",
                field: "middle_name",
                width: "100px",
                hidden: true,
                cellStyles: "text-align:center;"
                  },
            {
                name: "Last Name",
                field: "last_name",
                width: "100px",
                cellStyles: "text-align:center;",
                hidden: true,
                formatter: function (last_name) {
                    return '<em>' + last_name + '</em>';
                }
                  },
            {
                name: "Full Name",
                field: "full_name",
                width: "250px",
                hidden: false,
                cellStyles: "text-align:center;"
                  },
            {
                name: "Age/Sex",
                field: "age",
                width: "60px",
                cellStyles: "text-align:center;",
                formatter: function (age, rowI) {
                    var thisRow = this.grid.getItem(rowI);
                    var sex = thisRow.sex;
                    var sex_symbol;
                    if (sex == 'Male') {
                        sex_symbol = window.ICONS.MALE
                    } else if (sex == 'Female') {
                        sex_symbol = window.ICONS.FEMALE
                    } else {
                        sex_symbol = "Others"
                    }
                    var formatted_data = age + "&nbsp;&nbsp;" + sex_symbol;
                    return formatted_data;
                }
                  },
            {
                name: "Sex",
                field: "sex",
                width: "100px",
                hidden: true,
                formatter: function (sex) {
                    if (sex == 'Male') {
                        return window.ICONS.MALE;
                    } else if (sex == 'Female') {
                        return window.ICONS.FEMALE;
                    } else {
                        return "Others"
                    }
                },
                cellStyles: "text-align:center;"
                  },
            {
                name: "URL",
                field: "home",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;",
                  }],

        CONTACT_LARGE: [
            {
                name: "ID",
                field: "id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "PatID",
                field: "pat_id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Edit",
                field: "edit",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Del",
                field: "del",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Type",
                field: "address_type",
                width: "50px",
                cellStyles: "text-align:center;"
                                },

            {
                name: "Address",
                field: "address",
                width: "300px",
                cellStyles: "text-align:center;",
                formatter: function (address, rowI) {
                    var thisRow = this.grid.getItem(rowI);
                    var city_name = thisRow.city;
                    var state = thisRow.state;
                    var country = thisRow.country;
                    var zip_code = thisRow.zip_code;
                    var formatted_data = address + "</br>" +
                        city_name + "," + state + "</br>" +
                        country + "-" + zip_code;
                    return formatted_data;
                }
                                },

            {
                name: "City",
                field: "city",
                width: "150px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "State",
                field: "state",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Country",
                field: "country",
                width: "100px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "ZipCode",
                field: "zip_code",
                width: "100px",
                hidden: true,
                cellStyles: "text-align:center;"
                                }],

        CONTACT: [
            {
                name: "ID",
                field: "id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "PatID",
                field: "pat_id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Edit",
                field: "edit",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Del",
                field: "del",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Type",
                field: "address_type",
                width: "50px",
                cellStyles: "text-align:center;",
                hidden: true
                                },

            {
                name: "Address",
                field: "address",
                width: "300px",
                cellStyles: "text-align:center;",
                formatter: function (address, rowI) {
                    var thisRow = this.grid.getItem(rowI);
                    var address_type = thisRow.address_type;
                    var city_name = thisRow.city;
                    var state = thisRow.state;
                    var country = thisRow.country;
                    var zip_code = thisRow.zip_code;
                    var formatted_data = "<i><b>" + address_type +
                        "</b></i></br>" +
                        address + "</br>" +
                        city_name + "," + state + "</br>" +
                        country + "-" + zip_code;
                    return formatted_data;
                }
                                },

            {
                name: "City",
                field: "city",
                width: "150px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "State",
                field: "state",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "Country",
                field: "country",
                width: "100px",
                hidden: true,
                cellStyles: "text-align:center;"
                                },

            {
                name: "ZipCode",
                field: "zip_code",
                width: "100px",
                hidden: true,
                cellStyles: "text-align:center;"
                                }],

        PHONE_LARGE: [
            {
                name: "ID",
                field: "id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Edit",
                field: "edit",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Del",
                field: "del",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Type",
                field: "phone_type",
                width: "50px",
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Country Code",
                field: "country_code",
                width: "250px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Area Code",
                field: "area_code",
                width: "150px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Phone",
                field: "phone",
                width: "120px",
                cellStyles: "text-align:center;",
                formatter: function (phone, rowI) {
                    var rowdata = this.grid.getItem(rowI);
                    var COUNTRY = rowdata.country_code;
                    var AREA = rowdata.area_code;
                    var formatted_data = COUNTRY + "-" + AREA + "-" + phone
                    return formatted_data;
                }
                                  }],

        PHONE: [
            {
                name: "ID",
                field: "id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Edit",
                field: "edit",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Del",
                field: "del",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Type",
                field: "phone_type",
                width: "50px",
                cellStyles: "text-align:center;",
                hidden: true
                                  },

            {
                name: "ISD",
                field: "ISD_Code",
                width: "250px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "STD",
                field: "STD_Code",
                width: "150px",
                hidden: true,
                cellStyles: "text-align:center;"
                                  },

            {
                name: "Phone",
                field: "phone",
                width: "120px",
                cellStyles: "text-align:center;",
                formatter: function (phone, rowI) {
                    var rowdata = this.grid.getItem(rowI);
                    var COUNTRY = rowdata.country_code;
                    var AREA = rowdata.area_code;
                    var formatted_data = COUNTRY + "-" + AREA + "-" + phone;
                    return formatted_data;
                    }
            }
       ],


        GUARDIAN: [
            {
                name: "ID",
                field: "id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Edit",
                field: "edit",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Del",
                field: "del",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Name",
                field: "guardian_name",
                width: "100px",
                cellStyles: "text-align:center;",
                                    },
            {
                name: "Relation",
                field: "relation_to_guardian",
                width: "60px",
                cellStyles: "text-align:center;"
                                    },     
            {
                name: "Next of Kin?",
                field: "next_of_kin",
                width: "100px",
                cellStyles: "text-align:center;",
                                    },
            {
                name: "Emergency Contact ? ",
                field: "emergency_contact",
                width: "100px",
                cellStyles: "text-align:center;",
                                    },
            {
                name: "Phone",
                field: "guardian_phone",
                width: "70px",
                cellStyles: "text-align:center;"
                                    }
       ],

        DEMOGRAPHICS: [
            {
                name: "ID",
                field: "id",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Edit",
                field: "edit",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Del",
                field: "del",
                width: "50px",
                hidden: true,
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Socioeconomics",
                field: "socioeconomics",
                width: "50px",
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Education",
                field: "education",
                width: "250px",
                cellStyles: "text-align:center;"
                                    },

            {
                name: "Housing",
                field: "housing_conditions",
                width: "150px",
                cellStyles: "text-align:center;"
                                    },
            {
                name: "Religion",
                field: "religion",
                width: "150px",
                cellStyles: "text-align:center;"
                                    },
            {
                name: "Language",
                field: "languages_known",
                width: "150px",
                cellStyles: "text-align:center;"
                                    },
            {
                name: "Marital Status",
                field: "marital_status",
                width: "150px",
                cellStyles: "text-align:center;"
                                    },
            {
                name: "Drug Abuse",
                field: "drug_abuse_history",
                width: "150px",
                cellStyles: "text-align:center;"
                                    },
            {
                name: "Alcohol",
                field: "alcohol_intake",
                width: "150px",
                cellStyles: "text-align:center;"
                                    },
            {
                name: "Smoking",
                field: "smoking",
                width: "150px",
                cellStyles: "text-align:center;"
                                    }
        ]

    };

});