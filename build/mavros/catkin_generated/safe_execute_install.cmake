execute_process(COMMAND "/home/omki/catkin_ws1/build/mavros/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/omki/catkin_ws1/build/mavros/catkin_generated/python_distutils_install.sh) returned error code ")
endif()