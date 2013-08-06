#===============================================================================
# begin imports
#===============================================================================


from django.conf.urls import patterns, url
from companysite_frontend_app.views import spa
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


#===============================================================================
# end imports
#===============================================================================

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', spa),
    # url(r'^$', 'companysite_frontend_app.views.home', name='home'),
    # url(r'^companysite_frontend_app/', include('companysite_frontend_app.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
urlpatterns += staticfiles_urlpatterns()