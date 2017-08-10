'use strict';
var bpo_service = angular.module("bpo_service", []);

bpo_service.service("bpo_api", ["$http", function($http) {
    var form_post = function(url, data) {
        return {
            'url': url,
            'method': 'POST',
            'data': data,
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
            'transformRequest': function(data) {
                var str = [], index;
                for (var p in data) {
                    index = angular.isArray(data[p]) ? (encodeURIComponent(p) + "=" + "[" + encodeURIComponent(data[p]) + "]") : (encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                    str.push(index);
                }
                return str.join("&");
            }
        }
    };
    var form_post_add_token = function(info) {
        // todo: 暂时保留token
        //var token = get_token();
        //if (!token.length) {
        //    window.location.href = UMS_ROOT + '/accounts/login/?next=' + BPO_ROOT;
        //}
        //info.data.token = token;
        return info;
    };
    var post_add_token = function(url, data) {
        // todo: 暂时保留token
        //var token = get_token();
        //if (!token.length) {
        //    window.location.href = UMS_ROOT + '/accounts/login/?next=' + BPO_ROOT;
        //}
        var info = {
            'url': url,
            'method': 'POST',
            'data': data
        };
        //info.data.token = token;
        return info;
    };
    var get_add_token = function(url) {
        // todo: 暂时保留token
        //var token = get_token();
        //if (!token.length) {
        //    window.location.href = UMS_ROOT + '/accounts/login/?next=' + BPO_ROOT;
        //}
        //var info = {
        //    'url': url + "?token=" + token,
        //    'method': 'GET'
        //};
        var info = {
            'url': url,
            'method': 'GET'
        };
        return info;
    };

    return {
        // 获取用户对应的菜单/目录列表
        'get_menu_list': function(data, callback) {
            var info = form_post(bpo_http_api.accounts + 'get_menu_list/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取视频列表
        'get_video_list': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_video_list/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取内容审核视频列表
        'get_review_video': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_review_video/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取审核详情
        'get_review_detail': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_review_detail/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 视频审核
        'video_review': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'video_review/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 批量删除/恢复视频
        'delete_video': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'delete_video/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 批量删除导入失败的视频
        'delete_download_videos': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'delete_download_videos/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取视频转码相关信息
        'get_video_with_coding_info': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_video_with_coding_info/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 对视频进行某个模板的重新转码(待调整)
        'redo_transcoding': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'redo_transcoding/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取单个直播源
        'get_live_stream': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_live_stream/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取直播源列表
        'get_live_stream_list': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_live_stream_list/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取审核的直播源列表
        'get_review_live_streams': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_review_live_streams/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取直播源审核详情
        'get_lsreview_detail': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_lsreview_detail/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 创建直播源
        'create_live_stream': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'create_live_stream/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 修改直播源
        'update_live_stream': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'update_live_stream/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 直播源审核
        'live_stream_review': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'live_stream_review/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 直播源重新提交审核
        'submit_live_stream_review': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'submit_live_stream_review/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },

        // 批量删除直播源
        'delete_live_stream': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'delete_live_stream/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 播出节目单审核
        'program_group_review': function(data, callback) {
            var info = form_post(bpo_http_api.channel + 'program_group_review/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取频道列表
        'get_channels': function(data, callback) {
            var info = form_post(bpo_http_api.channel + 'get_channels/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 重新提交内容审核
        'submit_content_review': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'submit_content_review/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取节目单
        // 'get_program_groups': function(data, callback) {
        //     var info = form_post(bpo_http_api.channel + 'get_program_groups/', data);
        //     var Http = form_post_add_token(info);
        //     $http(Http).success(callback);
        // },
        // 获取审核的播出节目单
        // XXX 编单审核未开启的不显示
        'get_review_groups': function(data, callback) {
            var info = form_post(bpo_http_api.channel + 'get_review_groups/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 根据节目单ID获取节目列表
        'get_programs_by_groupid': function(data, callback) {
            var info = form_post(bpo_http_api.channel + 'get_programs_by_groupid/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 检查此目录下的文件名是否唯一
        'title_unique': function(data, callback) {
            var info = post_add_token(bpo_http_api.video + 'title_unique/', data);
            $http(info).success(callback);
        },
        // 获取媒资系统成品分类
        'get_vms_directories': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_vms_directories/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 获取媒资系统分类下的视频
        'get_vms_product_videos': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_vms_product_videos/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 导入系统来源
        'get_copyright': function(data, callback) {
            var info = post_add_token(bpo_http_api.video + 'get_copyright/', data);
            $http(info).success(callback);
        },
        // 从媒资系统导入视频
        'post_video_info': function(data, callback) {
            var info = post_add_token(bpo_http_api.video + 'post_video_info/', data);
            $http(info).success(callback);
        },
        // 获取新奥特媒资系统视频
        'get_cdv_product_videos': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'get_cdv_product_videos/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        },
        // 修改视频信息
        'update_video': function(data, callback) {
            var info = form_post(bpo_http_api.video + 'update_video/', data);
            var Http = form_post_add_token(info);
            $http(Http).success(callback);
        }
    }
}]);

bpo_service.service('bpo_check', function(growl) {
    return {
        // id: 判断条件不同，需手动传入
        init_check: function($scope, array, id) {
            $scope.checkboxes = {
                checked: false,
                items: []
            };
            // 多选
            $scope.item_check = function() {
                $scope.checkboxes.items = [];
                var check = 0, total = array.length;
                angular.forEach(array, function(data) {
                    if (data.check) {
                        $scope.checkboxes.items.push(data[id]);
                        check++;
                    }
                });
                $scope.checkboxes.checked = (check == total);
            };
            // 全选
            $scope.check_all = function() {
                $scope.checkboxes.items = [];
                if ($scope.checkboxes.checked) {
                    angular.forEach(array, function(data) {
                        data.check = true;
                        $scope.checkboxes.items.push(data[id]);
                    });
                } else {
                    angular.forEach(array, function(data) {data.check = false;});
                }
            };
        },
        // 带状态多选/单选操作
        batch_status: function (obj, callback) {
            var data = {};
            if (!obj.id) { // 多选
                if (!obj.$scope.checkboxes.items.length) {
                    growl.addErrorMessage("请至少选择一条数据", {ttl: bpo_prompt.error});
                    return false;
                }
                for (var i = 0; i < obj.array.length; i++) {
                    var item = obj.array[i];
                    if ((_.indexOf(obj.$scope.checkboxes.items, item.id) >= 0) && (item.status == obj.status)) {
                        obj.$scope.checkboxes.items = _.without(obj.$scope.checkboxes.items, item.id);
                    }
                }
                data.status = obj.status;
                data[obj.data_param] = obj.$scope.checkboxes.items;
            } else { // 单选
                data.status = (obj.status == 1) ? 0 : 1;
                data[obj.data_param] = [obj.id];
            }
            if (!data[obj.data_param].length) {
                growl.addErrorMessage("您选择的数据有误", {ttl: bpo_prompt.error});
                obj.$scope.checkboxes.checked = false;
                obj.$scope.checkboxes.items = [];
                angular.forEach(obj.array, function(data) {data.check = false;});
                return false;
            }
            callback(data);
        },
        // 无状态单选多选操作
        batch_operation: function(obj, callback) {
            var data = {};
            if (!obj.id) { // 多选操作
                if (!obj.$scope.checkboxes.items.length) {
                    growl.addErrorMessage("请至少选择一条数据", {ttl: bpo_prompt.error});
                    return false;
                }
                data[obj.data_param] = obj.$scope.checkboxes.items;
            } else { // 单选操作
                data[obj.data_param] = [obj.id];
            }
            callback(data);
        }
    }
});

/**
 * 文件上传
 * 注：不要在两个分类里同时上传视频！
 * 视频文件上传时，若在其中一个分类上传同时其他分类中也有上传视频，上传后视频分类会发生错误！
 */
bpo_service.service('video_upload', ["$rootScope", "$http", "growl", "bpo_api",
    function($rootScope, $http, growl, bpo_api) {
        return {
            create: function() {
                var uploadButton = angular.element('<input type="file" style="display:none;">')[0];
                angular.element(document.getElementsByClassName("video_upload")[0]).append(uploadButton);
                $rootScope.uploading = false;

                var upload_start_timestamp = 0;
                $rootScope.r = new Resumable({
                    'target': bpo_http_api.video + 'upload_video/',
                    'chunkSize': 512*1024,
                    'simultaneousUploads': 5,
                    'method': 'octet',
                    'fileType': ['avi', 'mov', 'asf', 'wmv', 'navi', '3gp', 'rmvb', 'mkv', 'flv', 'mpeg2', 'mpeg4', 'mp4', 'ts'],
                    'fileTypeErrorCallback': function(file, errorCount) {
                        alert('上传文件类型错误');
                    },
                    'generateUniqueIdentifier': function(file) {
                        return hex_md5(file.name + file.size + new Date().getTime());
                    },
                    'query': function(file) {
                        return {
                            'auth': file.auth,
                            'dir_id': $rootScope.upload_type
                        };
                    }
                });

                var oldOn = $rootScope.r.on;
                $rootScope.r.on = function (event, callback) {
                    oldOn.call(this, event, function() {
                        var args = arguments;
                        safeApply($rootScope, function() {
                            callback.apply(self, args);
                        });
                    });
                };

                function safeApply(scope, fn) {
                    var phase = scope.$root.$$phase;
                    if (phase == '$apply' || phase == '$digest') {
                        if (fn && (typeof(fn) === 'function')) {
                            fn();
                        }
                    } else {
                        scope.$apply(fn);
                    }
                }

                // multiple files upload
                // 开始上传
                $rootScope.upload_list = [];
                $rootScope.r.on('filesAdded', function(files) {
                    // 上传中重名文件阻止下一步
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        for (var j = 0; j < $rootScope.files.length; j++) {
                            var item = $rootScope.files[j];
                            if (item.fileName === file.fileName) {
                                growl.addErrorMessage(file.fileName + "文件正在上传中！", {ttl: bpo_prompt.error});
                                $rootScope.r.files.splice(j+1, 1);
                                file = null;
                                return false;
                            }
                        }
                    }

                    // 验证数据库重名信息
                    var titles = [];
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        var fileName = files[i].fileName.substring(0, files[i].fileName.lastIndexOf("."));
                        titles.push(fileName);
                    }

                    bpo_api.title_unique({
                        titles: titles,
                        dir_id: $rootScope.upload_type
                    }, function(res) {
                        if (res.result.length) {
                            return growl.addWarnMessage(res.result.join("，") + "文件名重复", {ttl: bpo_prompt.error});
                        }
                        // 弹出层页面上传列表
                        var video_list = [];
                        angular.forEach($rootScope.upload_list, function(data) {
                            video_list.push(data.fileName);
                        });
                        for (var i = 0; i < files.length; i++) {
                            var index = _.indexOf(video_list, files[i].fileName);
                            if (index >= 0) {
                                growl.addErrorMessage("待上传列表中已有选中视频！", {ttl: bpo_prompt.error});
                                return false;
                            }
                            $rootScope.upload_list.push(files[i]);
                        }

                        // 开始上传按钮
                        $rootScope.upload_button = false;
                    });
                });

                // 上传进度
                $rootScope.r.on('progress', function(files) {});

                $rootScope.r.on('uploadStart', function() {
                    upload_start_timestamp = new Date().getTime();
                    $rootScope.uploading = true;
                });

                $rootScope.r.on('complete', function() {
                    $rootScope.uploading = false;
                });

                // 代码移植到streamCtrl.js中
                //$rootScope.r.on('fileSuccess', function(file, message) {
                //    for (var i = 0; i < $rootScope.files.length; i++) {
                //        if($rootScope.files[i].uniqueIdentifier == file.uniqueIdentifier) {
                //            growl.addWarnMessage($rootScope.files[i].fileName + "上传成功", {ttl: bpo_prompt.success});
                //            $rootScope.files.splice(i, 1);
                //            break;
                //        }
                //    }
                //});

                $rootScope.r.on('fileError', function(file, message){
                    // todo: test file upload error
                    console.log(file.fileName, "上传失败，原因：", message);
                });

                $rootScope.r.on('pause', function() {
                    $rootScope.uploading = false;
                });

                $rootScope.r.on('cancel', function() {
                    $rootScope.uploading = false;
                });

                // 浏览文件
                $rootScope.browse = function() {
                    uploadButton.click();
                };

                // 开始上传功能移植到streamCtrl.js→uploadMaterialCtrl中
                // 开始上传
                $rootScope.upload = function() {
                    $rootScope.r.upload();
                };
                // 暂停上传
                $rootScope.pause = function() {
                    $rootScope.r.pause();
                };
                // 取消上传
                $rootScope.cancel = function() {
                    $rootScope.r.cancel();
                    $rootScope.files = [];
                };
                // 终止上传
                $rootScope.cancelFile = function(file) {
                    // abort只能使用一次-_-!？
                    //file.abort();
                    file.cancel();
                    $rootScope.files.splice($rootScope.files.indexOf(file), 1);
                };
                $rootScope.r.assignBrowse(uploadButton);
            }
        }
    }
]);

bpo_service.service('bpo_api_cancel', function($q) {
    return {
        canceler: $q.defer(),
        cancel_request: function($q) {
            var self = this;
            self.canceler.resolve();
            self.canceler = $q.defer();
        }
    }
});

bpo_service.service('odd_datepicker', function() {
    return {
        date: function($scope) {
            $scope.odd_status = false;
            $scope.format = 'yyyy/MM/dd';
            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1,
                showWeeks: false
            };
            $scope.odd_date = new Date();
            $scope.open_datepicker = function() {$scope.odd_status = true};
        }
    }
});

bpo_service.service('datepicker', function() {
    return {
        init_date: function($scope) {
            $scope.status = {
                start_opened: false,
                end_opened: false
            };
            $scope.format = 'yyyy/MM/dd';
            $scope.dateOptions = {
                dateDisabled: disabled,
                formatYear: 'yy',
                startingDay: 1,
                showWeeks: false
            };
            $scope.start_dt = new Date();
            $scope.end_dt = new Date();
            // Disable weekend selection
            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                if ($scope.status.start_opened) {
                    return mode === 'day' && (date < new Date(get_current_day_time_zero_stamp() - 86400000 * 30 * 6)
                        || date >= new Date($scope.end_dt.getTime() + 86400000));
                } else {
                    return mode === 'day' && (date <= new Date($scope.start_dt.getTime() - 86400000));
                }
            }
            $scope.open_datepicker = function(sign) {
                (sign == 'start') ? $scope.status.start_opened = true : $scope.status.end_opened = true;
            };
        }
    }
});

bpo_service.service('third_menu', function() {
    return function(list, num) {
        /**
         * num为2时适用素材管理素材类别、编单添加素材、垫片， 为3时适用频道类别。
         * **/
        var arr = [];
        function menu(list, num, str) {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                if (str === undefined || item.level == num) {
                    str = item.name;
                } else if (i == 0){
                    str += "/" + item.name;
                } else {
                    str = str.substring(0, str.lastIndexOf("/")) + "/" + item.name;
                }
                arr.push({name: str, id: item.id});
                if (item.child_menu) {
                    menu(item.child_menu, num, str);
                }
            }
            return arr;
        }
        return menu(list, num);
    }
});

bpo_service.provider('bpo_http_error', [function() {
    this.$get = ['$rootScope', 'growl', function($rootScope, growl) {
        return {
            http_error_handler: function(result, status) {
                $rootScope.$broadcast('bpo_on_error', result, status);
            },
            /*
             event: obj // angularjs http event obj
             code: number
             // 如果http请求不正确，那么只有status值，没有code值，code值为null
             // 如果请求正确，但服务器返回错误，那么status为200，code值
             status: number // http response or request status，例如200, 401
             **/
            on_response_error: function($scope, callback) {
                $scope.$on('bpo_on_error', function(event, result) {
                    growl.addErrorMessage(result, {ttl: bpo_prompt.error});
                    callback && callback();
                });
            }
        };
    }];
}]);

// intercept http error
bpo_service.factory('MHttpInterceptor', ['$q', 'bpo_http_error', function($q, bpo_http_error) {
    // register the interceptor as a service
    // @see: https://code.angularjs.org/1.2.0-rc.3/docs/api/ng.$http
    // @remark: the function($q) should never add other params.
    return {
        'request': function(config) {
            return config || $q.when(config);
        },
        'requestError': function(rejection) {
            return $q.reject(rejection);
        },
        /*
         response: {
         config: obj
         data: {
         code: 400, // http response code
         data: obj // http response data
         },
         headers:  function,
         status: 200, // http response status
         statusText: "OK"
         }
         **/
        'response': function(response) {
            // 验证权限跳转→登录页面
            if (response.data.status && response.data.status == Errors.redirect) {
                window.location.href = response.data.result + '?next=' + BPO_ROOT;
            }

            if (response.data.status && response.data.status != Errors.success) {
                bpo_http_error.http_error_handler(response.data.result, response.status);
                return $q.reject(response.data.result);
            }
            return response || $q.when(response);
        },
        /*
         rejection: {
         data: string, // http response data
         status: 401, // http response status
         config: obj,
         headers:  function,
         statusText: "Unauthorized"
         }
         **/
        'responseError': function(rejection) {
            bpo_http_error.http_error_handler(null, rejection.status);
            return $q.reject(rejection.status);
        }
    };
}]);

bpo_service.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('MHttpInterceptor')
}]);